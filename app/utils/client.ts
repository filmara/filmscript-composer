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

const saveScene = async (projectId: number, sceneData: string, order: number): Promise<void> => {
    try {
        await invoke('save_scene', { projectId, sceneData, order });
        console.log('Scene saved successfully');
    } catch (error) {
        console.error('Failed to save scene:', error);
    }
}

type FormOutput = { id: string; value: string }[];

const createNewProject = async (formData: FormOutput): Promise<number> => {
    try {
        // Extract project name using the utility function
        const { project_name } = findValuesByIds(formData, ['project_name']);
        if (!project_name) {
            throw new Error("Project name is required");
        }

        // Call the backend with the extracted project name
        const projectId = await invoke('create_project', { projectName: project_name });
        return projectId as number;
    } catch (error) {
        console.error('Failed to create project', error);
        throw error;
    }
};

// Helper function to find values by ID
const findValuesByIds = (formData: FormOutput, ids: string[]): Record<string, string | undefined> => {
    return ids.reduce((acc, id) => {
        const item = formData.find(item => item.id === id);
        acc[id] = item ? item.value : undefined;
        return acc;
    }, {} as Record<string, string | undefined>);
};


export { testDbConnection, saveScene, createNewProject }