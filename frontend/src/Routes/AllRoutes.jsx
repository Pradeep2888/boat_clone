import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      
    </div>
  )
}

export default AllRoutes