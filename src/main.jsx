
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import GlobalState from './context/Context.jsx'
import Pomodoro from './components/Pomodoro.jsx';
import Timezone from './components/Timezone.jsx';
import Dailyplanner from './components/Dailyplanner.jsx';
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
        path: '/Dailyplanner',
        element: <Dailyplanner />
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
