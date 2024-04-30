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
      splitAndSaveScenes(projectId, value)
      // console.log('Auto-saving content:', value);
    };

    // Set up an interval for auto-saving every 5 seconds
    const autoSaveInterval = setInterval(handleAutoSave, 50000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(autoSaveInterval);
  }, [value]);

  return (
    <div className="bg-neutral-2200 h-[2vh] text-neutral-900 text-footer-light">
    </div>
  );
};

export { StatusBar };