import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
import Hero from './components/Hero.jsx'

import Home from './pages/Home';
import Workouts from './pages/Workouts.jsx';
import WhyUs from './pages/WhyUs.jsx';
import Plans from './pages/Plans.jsx';
import Error from './pages/Error';
import ExerciseDetail from './pages/ExerciseDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />
      }, 
      {
        path: '/',
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
        path: '/plans',
        element: <Plans />
      },
      // {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, {
      //   path: '/me',
      //   element: <Profile />
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)