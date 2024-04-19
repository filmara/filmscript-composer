// main.rs

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::{params, Connection, Result as SqlResult};
const DATABASE_PATH: &str = "../database/app.db";

fn main() {
    setup_database().expect("Failed to setup database");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_scene, test_connection, load_scenes, create_project, get_projects])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn setup_database() -> SqlResult<()> {
    let conn = Connection::open(DATABASE_PATH)?;
    conn.execute_batch("
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            last_modified TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS scenes (
            id INTEGER PRIMARY KEY,
            project_id INTEGER,
            data BLOB,
            \"order\" INTEGER,
            created_at TEXT,
            updated_at TEXT,
            FOREIGN KEY(project_id) REFERENCES projects(id)
        );
    ")?;
    Ok(())
}

#[tauri::command]
fn get_projects() -> Result<Vec<(i64, String)>, String> {
    let conn = Connection::open(DATABASE_PATH).map_err(|e| e.to_string())?;
    let mut stmt = conn.prepare("SELECT id, name FROM projects").map_err(|e| e.to_string())?;
    let projects = stmt.query_map([], |row| {
        Ok((row.get(0)?, row.get(1)?))
    }).map_err(|e| e.to_string())?
    .collect::<Result<Vec<(i64, String)>, rusqlite::Error>>().map_err(|e| e.to_string())?;
    Ok(projects)
}


#[tauri::command]
fn create_project(project_name: String) -> Result<i64, String> {
    let conn = Connection::open(DATABASE_PATH).map_err(|e| e.to_string())?;
    conn.execute(
        "INSERT INTO projects (name, last_modified) VALUES (?1, datetime('now'))",
        params![project_name],
    ).map_err(|e| e.to_string())?;

    let project_id = conn.last_insert_rowid();
    Ok(project_id)
}

#[tauri::command]
fn save_scene(project_id: i64, scene_data: String, order: i32) -> Result<(), String> {
    let conn = Connection::open(DATABASE_PATH).map_err(|e| e.to_string())?;
    let scene_exists: i64 = conn.query_row(
        "SELECT COUNT(*) FROM scenes WHERE project_id = ?1 AND \"order\" = ?2",
        params![project_id, order],
        |row| row.get(0),
    ).unwrap_or(0);

    if scene_exists > 0 {
        conn.execute(
            "UPDATE scenes SET data = ?1, updated_at = datetime('now') WHERE project_id = ?2 AND \"order\" = ?3",
            params![scene_data, project_id, order],
        ).map_err(|e| e.to_string())?;
    } else {
        conn.execute(
            "INSERT INTO scenes (project_id, data, \"order\", created_at, updated_at) VALUES (?1, ?2, ?3, datetime('now'), datetime('now'))",
            params![project_id, scene_data, order],
        ).map_err(|e| e.to_string())?;
    }
    Ok(())
}


#[tauri::command]
fn load_scenes(project_id: i64) -> Result<Vec<(i32, String)>, String> {
    let conn = Connection::open(DATABASE_PATH).map_err(|e| e.to_string())?;
    let mut stmt = conn.prepare("SELECT \"order\", data FROM scenes WHERE project_id = ? ORDER BY \"order\"").map_err(|e| e.to_string())?;
    let scenes = stmt.query_map(params![project_id], |row| {
        Ok((row.get(0)?, row.get(1)?))
    }).map_err(|e| e.to_string())?
    .collect::<Result<Vec<(i32, String)>, rusqlite::Error>>()
    .map_err(|e| e.to_string())?;

    Ok(scenes)
}

// #[tauri::command]
// fn load_scenes(project_id: i64) -> Result<Vec<String>, String> {
//     let conn = rusqlite::Connection::open(DATABASE_PATH).map_err(|e| e.to_string())?;
//     let mut stmt = conn.prepare(
//         "SELECT data FROM scenes WHERE project_id = ? ORDER BY \"order\""
//     ).map_err(|e| e.to_string())?;

//     let scenes_iter = stmt.query_map(params![project_id], |row| {
//         row.get(0)
//     }).map_err(|e| e.to_string())?;

//     let mut scenes = Vec::new();
//     for scene in scenes_iter {
//         scenes.push(scene.map_err(|e| e.to_string())?);
//     }
//     Ok(scenes)
// }
   


#[tauri::command]
fn test_connection() -> Result<String, String> {
    match Connection::open(DATABASE_PATH) {
        Ok(_) => Ok("Connection successful".to_string()),
        Err(e) => Err(format!("Failed to connect: {}", e)),
    }
}
