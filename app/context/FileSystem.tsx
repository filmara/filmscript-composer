import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { writeTextFile, createDir, BaseDirectory, readBinaryFile } from '@tauri-apps/api/fs';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

// Define the interface for the context
export interface FileSystemContextType {
    resourceDir: string | null;
    writeFile: () => void;
    createProjectsFolder: () => void;
    readFile: () => void;
    readFileAndStore: (filePath: string, fileName: string) => string;
    getImage: (name: string) => string;
}

interface ImageDB extends DBSchema {
    images: {
        key: string;
        value: { id: string; blob: Blob };
    };
}


// Create the context with a default null value
const FileSystemContext = createContext<FileSystemContextType | null>(null);

// Custom hook for using the context
export const useFileSystem = () => {
    const context = useContext(FileSystemContext);
    if (!context) {
        throw new Error('useFileSystem must be used within a FileSystemProvider');
    }
    return context;
}

// Provider component type
interface FileSystemProviderProps {
    children: ReactNode;
}

export const FileSystemProvider: React.FC<FileSystemProviderProps> = ({ children }) => {
    const [resourceDir, setResourceDir] = useState<string | null>(null);
    // Import resourceDir and save it inside the state for later usage
    // Import resourceDir and save it inside the state for later usage
    async function setupResourceDir() {
        try {
            const resourceDirResult = await import('@tauri-apps/api/path').then(api => api.appDataDir());
            setResourceDir(resourceDirResult);
        } catch (error) {
            console.error('Failed to load resource directory:', error);
            setResourceDir(null);  // Handle error state appropriately
        }
    }

    useEffect(() => {
        setupResourceDir();
    }, []);


    // Function to initialize the IndexedDB
    async function initDB(): Promise<IDBPDatabase<ImageDB>> {
        return openDB<ImageDB>('imagesDB', 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('images')) {
                    db.createObjectStore('images', { keyPath: 'id' });
                }
            },
        });
    }

    // Function to store a Blob in IndexedDB
    async function storeImage(blob: Blob, name: string): Promise<void> {
        const db = await initDB();
        await db.put('images', { id: name, blob });
        console.log('Image stored:', name);
    }

    // Function to retrieve an image and create a URL
    async function getImage(name: string): Promise<string> {
        const db = await initDB();
        const imageRecord = await db.get('images', name);
        if (!imageRecord) throw new Error("Image not found in the database");
        return URL.createObjectURL(imageRecord.blob);
    }

    // Function to read a file using Tauri API and store it in IndexedDB
    const readFileAndStore = async (filePath: string, fileName: string): Promise<string> => {
        try {
            console.log('Reading file:', filePath);
            const binaryData = await readBinaryFile(filePath, { dir: BaseDirectory.AppData });
            const blob = new Blob([binaryData], { type: 'image/png' }); // Adjust the MIME type based on your image
            console.log("binaryData", binaryData)
            // Store the Blob in IndexedDB
            await storeImage(blob, fileName);

            return await getImage(fileName); // Retrieve the image URL for display
        } catch (error) {
            console.error('Failed to read and store file:', error);
            return Promise.reject(error);
        }
    }


    const writeFile = async () => {
        try {
            await writeTextFile('./file.txt', 'File content here', { dir: BaseDirectory.AppData });
            console.log('File written successfully');
        } catch (error) {
            console.error('Failed to write file:', error);
        }
    }

    const readFile = async () => {
        // Read the image file in the `$RESOURCEDIR/avatar.png` path
        try {
            console.log('Reading file')
            const contents = await readBinaryFile('projects/images/23f7acae-8a78-4285-a7c9-51c5a0952ab9.png', { dir: BaseDirectory.AppData });
            console.log('contents', contents)
        } catch (error) {
            console.error('Failed to write file:', error);
        }
    }
    const createProjectsFolder = async () => {
        try {
            const crtdir = await createDir('projects', { dir: BaseDirectory.AppData, recursive: true });
            console.log('Folder Created successfully', crtdir);
        } catch (error) {
            console.error('Failed to write file:', error);
        }
    }

    const readImage = async () => {
        // Read the image file in the `$RESOURCEDIR/avatar.png` path
        const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.AppData });
    }

    // The value provided to the context consumers
    const contextValue = {
        resourceDir,
        writeFile,
        createProjectsFolder,
        readFile,
        readFileAndStore,
        getImage
    };

    return (
        <FileSystemContext.Provider value={contextValue}>
            {children}
        </FileSystemContext.Provider>
    );
};
