use crate::config::DATABASE_PATH;
use rusqlite::{Connection, Result as SqlResult};

pub fn setup_database() -> SqlResult<()> {
    let conn = Connection::open(DATABASE_PATH)?;
    conn.execute_batch(
        "
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
    
    CREATE TABLE IF NOT EXISTS shoots (
        id INTEGER PRIMARY KEY,
        scene_id INTEGER,
        description TEXT,
        shot_size TEXT,
        camera_angle TEXT,
        camera_movement TEXT,
        lens TEXT,
        lighting TEXT,
        duration TEXT,
        emotional_tone TEXT,
        FOREIGN KEY(scene_id) REFERENCES scenes(id)
    );
    
    CREATE TABLE IF NOT EXISTS scene_details (
        id INTEGER PRIMARY KEY,
        shoot_id INTEGER,
        type TEXT,  -- 'Character', 'Props', 'Sound', etc.
        description TEXT,
        FOREIGN KEY(shoot_id) REFERENCES shoots(id)
    );
",
    )?;
    Ok(())
}
