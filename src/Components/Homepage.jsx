import React from 'react'
import {Link} from "react-router-dom"
const Homepage = () => {
  return (
    <div>
        <Link to="rating">Rating</Link>
        <Link to="carosule">Carosule</Link>
        <Link to="drag">Drag</Link>
    
        <Link to="stopwatch">Stopwatch</Link>
    </div>
  )
}

export default Homepage