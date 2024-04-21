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
    appWindow.startDragging();
  }

  // Use "onClick" on buttons and call the 3 functions above
  return (
    <>
      <div data-tauri-drag-region style={{ height: '30px', width: '100%'}} onMouseDown={startDragging}>
      </div>
    </>
  )
}
