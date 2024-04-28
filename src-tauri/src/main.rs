#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod db;
mod config;
mod commands;

use std::env;
use tauri::Builder;
use commands::scene_commands::{save_scene, load_scenes, get_scenes, process_scenes};
use commands::project_commands::{create_project, get_projects};

fn main() {
    println!("cargo:rustc-link-lib=System");

    // Set the working directory to the application's root directory
    let app_dir = env::current_exe().expect("Failed to get current executable path");
    let app_root_dir = app_dir.parent().expect("Failed to get application root directory");
    env::set_current_dir(app_root_dir).expect("Failed to set working directory");

    db::setup_database().expect("Failed to setup database");

    Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_scene,
            get_scenes,
            process_scenes,
            load_scenes,
            create_project,
            get_projects,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
