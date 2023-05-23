import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Drag from './Drag'
import Rating from './Rating'
import Carosule from './Carosule'
import Stopwatch from './Stopwatch'
const AllRoutes = () => {
  return (
    <Routes>
       <Route  path='/' element={<Homepage/>}/>
       <Route  path='/drag' element={<Drag/>}/>
       <Route  path='/rating' element={<Rating/>}/>
       <Route  path='/carosule' element={<Carosule/>}/>
       <Route  path='/Stopwatch' element={<Stopwatch/>}/>
       
    </Routes>
  )
}

export default AllRoutes