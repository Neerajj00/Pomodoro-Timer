import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MenuOverlay from './components/MenuOverlay';
import { GlobalContext } from './context/Context';
import AdjustManuallyOverlay from './components/AdjustManuallyOverlay';

function App() {
  const {isFullScreen, displayMenuOverlay ,displayAdjustManuallyOverlay } = useContext(GlobalContext);

  return (
    <>
    {displayMenuOverlay && <MenuOverlay/>}
    {displayAdjustManuallyOverlay && <AdjustManuallyOverlay />}
    <div className='flex flex-row h-[100vh] z-10'>
      {!isFullScreen && <Sidebar/>}
      <main className='main-content bg-black w-full h-[100vh]'>
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default App
