import { useEffect, useState } from 'react'
import { useProject } from '~/context'
import { Dropdown } from '~/design-system'

export function TitleBar() {
  const [appWindow, setAppWindow] = useState()
  const { project, closeProject, deleteCurrentProject } = useProject();

  async function setupAppWindow() {
    const appWindow = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(appWindow)
  }

  useEffect(() => {
    setupAppWindow()
  }, [])

  function startDragging(event) {
    event.stopPropagation();
    appWindow.startDragging();
  }

  const handleDeleteProject = async () => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await deleteCurrentProject();
      } catch (error) {
        console.error('Failed to delete project:', error);
        alert('Failed to delete project. Please try again.');
      }
    }
  };

  return (
    <div data-tauri-drag-region className="light h-[64px] bg-neutral-100" onMouseDown={startDragging}>
      <div className="flex justify-center items-center pt-4">
        <div>{project && <Dropdown
          direction="center-bottom"
          button={{
            variant: 'outline',
            size: 'small',
            text: project.name,
            customCss: 'px-12'
          }}
          items={[
            { text: 'Delete Project', type: 'button', action: handleDeleteProject },
            { text: 'Close', type: 'button', action: () => closeProject() }
          ]}
        />}</div>
      </div>
    </div>
  )
}
