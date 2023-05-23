import React, { useState } from 'react'
import Star from './Star';
import "./Rating.css"
const Rating = () => {

    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
      setRating(value);
    };
  
  return (
    <div className="star-rating">
        <h2>Rate my work</h2>
        <div style={{width:"70%",margin:"auto"}}>
        {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          value={value}
          filled={value <= rating}
          onClick={handleRating}
        />
      ))}
        </div>
     
    </div>
  )
}

export default Rating