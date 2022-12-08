import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'
import Meals from './Meals'
import Navbar from './Navbar'



const App = () => {
  return (
    <div className='container mx-auto'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/detail/:id' element={<Details />}/>
      </Routes>
    </div>
  )
}

export default App