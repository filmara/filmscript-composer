import { useEffect, useState } from 'react'


export function TitleBar() {
  const [appWindow, setAppWindow] = useState()

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
    <>
      <div data-tauri-drag-region className="midnight h-[30px] bg-neutral-2200" onMouseDown={startDragging}>
      </div>
    </>
  )
}
