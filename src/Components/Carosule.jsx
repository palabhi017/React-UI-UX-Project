import React, { useState } from 'react'
import "../Components/Carosule.css"

const Carosule = () => {

    let images =["https://th.bing.com/th/id/OIP.s9Irf5fq-UcGQBprEeOOGQHaE6?pid=ImgDet&rs=1","https://th.bing.com/th/id/R.d8aedc575ac32a253b5be5d25a52d598?rik=aLHj1W5emKA1Iw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2f1573618audi-car-images.jpg&ehk=EF0VdTd7DJoHQviRvsvMwZOxXN8XnzPldXhNrNT4Rl0%3d&risl=&pid=ImgRaw&r=0","https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=asphalt-auto-automobile-244206.jpg&fm=jpg","https://th.bing.com/th/id/R.5dc4bbe4e94de4902c0b50cd17ef5ec2?rik=Vr3AOPmiapnF5Q&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f07%2fNew-Year-Car-Wallpapers-2014-15.jpg&ehk=hWo1K6hCInA0FT9EGGuJntORpB1dfY73ouSp6uxfXWk%3d&risl=&pid=ImgRaw&r=0"]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const imageStyle = {
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentImageIndex * 100}%)`,
      };
    
    
  return (
    <>
      <div className="image-carousel">
     
      <div className="image-container">
        {images && images.map((e,i)=>  <img src={e} className='img' alt="carousel"  style={imageStyle}  />)}
    
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",alignItems:"center"}}>
      <button onClick={previousImage} className='pbtn'>Previous</button>
      <div style={{display:"flex",gap:"10px"}}>

        {images && images.map((e,i)=>  <div className='cbtn' onClick={()=> setCurrentImageIndex(i)}></div>)}
      </div>
      
      <button onClick={nextImage} className='pbtn'>Next</button>
      </div>
      
    </div>
    </>
  )
}

export default Carosule