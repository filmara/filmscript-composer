// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::{Connection, Result};
use tauri::Builder;

fn main() {
    setup_database().expect("Failed to setup database");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![test_connection])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn setup_database() -> Result<()> {
    let conn = Connection::open("database.sqlite")?;
    conn.execute_batch(
        "
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            last_modified TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS scenes (
            id INTEGER PRIMARY KEY,
            project_id INTEGER NOT NULL,
            text TEXT NOT NULL,
            type TEXT NOT NULL,
            \"order\" INTEGER NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY(project_id) REFERENCES projects(id)
        );
        ",
    )?;
    Ok(())
}

#[tauri::command]
fn test_connection() -> Result<String, String> {
    let conn = Connection::open("database.sqlite");
    match conn {
        Ok(_) => Ok("Connection successful".to_string()),
        Err(e) => Err(format!("Failed to connect: {}", e)),
    }
}
