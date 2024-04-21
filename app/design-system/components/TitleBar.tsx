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

  // These 3 functions will see the "appWindow" stored inside the state
  function windowMinimize() {
    appWindow?.minimize()
  }
  function windowToggleMaximize() {
    appWindow?.toggleMaximize()
  }
  function windowClose() {
    appWindow?.close()
  }

  // Use "onClick" on buttons and call the 3 functions above
  return (
    <>
      <div data-tauri-drag-region>
        <button onClick={windowMinimize}>min</button>

        <button onClick={windowToggleMaximize}>max</button>

        <button onClick={windowClose}>close</button>
      </div>
    </>
  )
}
