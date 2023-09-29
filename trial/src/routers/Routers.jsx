import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
import Hotel from '../pages/Hotel'
import HotelDetails from '../pages/HotelDetails'
import Login from '../pages/Login'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='Home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/hotel/:id' element={<HotelDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/hotel/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Routers
