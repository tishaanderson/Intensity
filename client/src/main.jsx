import React from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'

import Home from './pages/Home'
import Workouts from './pages/Workouts'
import WhyUs from './pages/WhyUs'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import ExerciseDetail from './pages/ExerciseDetail'

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
        path: '/exercisedetail',
        element: <ExerciseDetail />
      },
      {
        path: '/why-us',
        element: <WhyUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }, 
      //{
      //   path: '/me',
      //   element: <Profile />
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)