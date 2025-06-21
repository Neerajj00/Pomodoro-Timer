
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import GlobalState from './context/Context.jsx'
import Pomodoro from './components/Pomodoro.jsx';
import Timezone from './components/Timezone.jsx';
import EyeStrain202020 from './components/EyeStrain202020.jsx';
import Timer from './components/Timer.jsx';
import Stopwatch from './components/Stopwatch.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pomodoro />
      },
      {
        path: '/Timezone',
        element: <Timezone />
      },
      {
        path: '/EyeStrain202020',
        element: <EyeStrain202020 />
      },
      {
        path: '/timer',
        element: <Timer />
      },
      {
        path: '/stopwatch',
        element: <Stopwatch />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <GlobalState>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </GlobalState>
)
