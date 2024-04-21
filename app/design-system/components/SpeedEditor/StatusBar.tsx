import React, { useEffect } from 'react';
import { useEditor } from './context'; // Import the useEditor hook from your context
import {splitAndSaveScenes } from '~/utils';

interface StatusBarProps {
    projectId: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ projectId }) => {
  const { value, setValue } = useEditor();

  useEffect(() => {
    const handleAutoSave = async () => {
      // Simulate an API call to save the editor state
      splitAndSaveScenes(Number(projectId), value)
      console.log('Auto-saving content:', value);
      // Here you would typically call an API to save the content
    };

    // Set up an interval for auto-saving every 30 seconds
    const autoSaveInterval = setInterval(handleAutoSave, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(autoSaveInterval);
  }, [value]);

  return (
    <div className="bg-neutral-2200 h-[2vh] text-neutral-900 text-footer-light">
      <span className="px-2">Status: Connected</span> {/* Example status */}
      {/* Additional UI elements for the status bar can be added here */}
    </div>
  );
};

export { StatusBar };