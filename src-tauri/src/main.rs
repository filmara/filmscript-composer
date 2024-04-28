// main.rs

#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod db;
mod config;
mod commands;

use tauri::Builder;
use commands::scene_commands::{save_scene, load_scenes, get_scenes, process_scenes};
use commands::project_commands::{create_project, get_projects};
use commands::image_commands::generate_image_and_save;

fn main() {
    println!("cargo:rustc-link-lib=System");
    db::setup_database().expect("Failed to setup database");

    Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_scene,
            get_scenes,
            process_scenes,
            load_scenes,
            create_project,
            get_projects,
            generate_image_and_save
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
