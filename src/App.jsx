import { useState } from 'react'
// import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div width='400px' sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* /* exercise/:id will be dynamically rendered inside out exercise component */ }
        <Route path='/exercise/:id' element={<ExerciseDetail />} />   
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
