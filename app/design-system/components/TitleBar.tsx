import { useEffect, useState } from 'react'
import { useProject } from '~/context'
import { Dropdown } from '~/design-system'

export function TitleBar() {
  const [appWindow, setAppWindow] = useState()
  const { project, closeProject } = useProject();
  // Import appWindow and save it inside the state for later usage
  async function setupAppWindow() {
    const appWindow = (await import('@tauri-apps/api/window')).appWindow
    setAppWindow(appWindow)
  }

  useEffect(() => {
    setupAppWindow()
  }, [])

  function startDragging(event) {
    // Stop propagation to prevent interference with other button clicks
    event.stopPropagation();
    appWindow.startDragging();
  }

  // Use "onClick" on buttons and call the 3 functions above
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
            // { text: 'Save Project', type: 'button', action: () => splitAndSaveScenes(project.id, ) },
            { text: 'Close', type: 'button', action: () => closeProject() }
          ]}
        />}</div>
      </div>
    </div>
  )
}
