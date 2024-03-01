import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'

import Home from './pages/Home.jsx'
import Workouts from './pages/Workouts.jsx'
import WhyUs from './pages/WhyUs.jsx'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Error from './pages/Error.jsx'
import ExerciseDetail from './pages/ExerciseDetail.jsx'
import Profile from './pages/Profile.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/workouts',
        element: <Workouts />
      },
      {
        path: '/exercise-detail/:id',
        element: <ExerciseDetail />
      },
      {
        path: '/why-us',
        element: <WhyUs />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)