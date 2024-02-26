import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';

import Home from './pages/Home';
import Workouts from './pages/Workouts';
import WhyUs from './pages/WhyUs';
import Plans from './pages/Plans';
// import SignUp from './pages/SignUp';
import Error from './pages/Error';
import ExerciseDetail from './pages/ExerciseDetail';
// import SignUp from './components/SignUp.jsx';

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
      // {
      //   path: '/home',
      //   element: <Home />
      // },
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
      //   path: '/pages/sign-up',
      //   element: <SignUp />
      // },
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