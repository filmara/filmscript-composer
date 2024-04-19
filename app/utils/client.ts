import { invoke } from '@tauri-apps/api/tauri';

const testDbConnection = async () => {
    try {
        const response = await invoke('test_connection');
        console.log(response);
        alert(response);
    } catch (error) {
        console.error('Error testing connection:', error);
        alert('Connection test failed: ' + error);
    }
};

/**
 * Saves scene data to the database.
 * @param projectId The ID of the project this scene belongs to.
 * @param sceneData The data of the scene to be saved, typically JSON stringified.
 * @param order The order of the scene within the project.
 */
const saveScene = async (projectId: number, sceneData: string, order: number): Promise<void> => {
    try {
        await invoke('save_scene', { projectId, sceneData, order });
        console.log('Scene saved successfully');
    } catch (error) {
        console.error('Failed to save scene:', error);
    }
}

export { testDbConnection, saveScene }