#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod db;
mod config;
mod commands;
use tauri::Config;
use tauri::api::path::app_data_dir;
use std::path::PathBuf;
use std::env;
use tauri::Builder;
use commands::scene_commands::{save_scene, load_scenes, get_scenes, process_scenes};
use commands::project_commands::{create_project, get_projects};
use commands::image_commands::download_image;

fn main() {
    let config = Config::default();
    if let Some(app_data_path) = app_data_dir(&config) {
        // Create a PathBuf from the AppData directory
        let mut projects_folder = PathBuf::from(app_data_path);

        // Check if the OS is macOS
        if cfg!(target_os = "macos") {
            // Path for macOS
            projects_folder.push("com.filmscript.composer.prod/projects");
        } else {
            // Path for other operating systems
            projects_folder.push("projects");
        }

        // Set an environment variable to store the projects folder path
        env::set_var("PROJECTS_FOLDER", &projects_folder.display().to_string());

        println!("Projects folder path set in environment variable: {:?}", projects_folder);
    } else {
        println!("Failed to find the AppData directory.");
    }
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
            download_image
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
