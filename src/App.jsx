import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MenuOverlay from './components/MenuOverlay';
import { GlobalContext } from './context/Context';

function App() {
  const { displayMenuOverlay } = useContext(GlobalContext);

  return (
    <>
    {displayMenuOverlay && <MenuOverlay/>}
    <div className='flex flex-row h-[100vh] z-10'>
      <Sidebar/>
      <main className='main-content bg-black w-full h-[100vh]'>
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default App
