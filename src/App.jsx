// App.jsx
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MenuOverlay from './components/MenuOverlay';
import { GlobalContext } from './context/Context';
import AdjustManuallyOverlay from './components/AdjustManuallyOverlay';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TimerSettingOverlay from './components/TimerSettingOverlay';

function App() {
  const {isFullScreen, displayMenuOverlay ,displayAdjustManuallyOverlay,TimerOverlay } = useContext(GlobalContext);

  return (
    <>
    {displayMenuOverlay && <MenuOverlay/>}
    {displayAdjustManuallyOverlay && <AdjustManuallyOverlay />}
    {TimerOverlay &&  <TimerSettingOverlay/>}
    <div className='outer-container flex flex-row h-full lg:h-[100vh] z-10'>
      {!isFullScreen && <Sidebar/>}
      <main className='main-content bg-black w-full h-full lg:h-[100vh]'>
        <Outlet />
      </main>
    </div>

    <ToastContainer 
        position="top-center" // Slide from top
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default App;
