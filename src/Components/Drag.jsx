import React from 'react'
import "../Components/Drag.css"
const Drag = () => {

let boxs = document.querySelectorAll(".box")

let image = document.querySelector("#image")

let start=()=>{
  boxs = document.querySelectorAll(".box")
  image = document.querySelector("#image")
}

let over =(e)=>{
  e.preventDefault()
  e.target.classList.add("hover")
  
}
let leave =(e)=>{
  e.preventDefault()
  e.target.classList.remove("hover")
}
   let p= document.createElement("p")
   p.innerText="done"
let drop=(e)=>{
  e.preventDefault()
  e.target.appendChild(image)

  e.target.classList.remove("hover")

}
   
    
 return (
    <>
    <div className="maindiv">
     <div className='box' onDragStart={start} onDragOver={over} onDragLeave={leave} onDrop={drop}>
      <div id='image' draggable="true" ></div>
     </div>
     <div className='box' onDragStart={start} onDragOver={over} onDragLeave={leave} onDrop={drop}></div>
     <div className='box' onDragStart={start} onDragOver={over} onDragLeave={leave} onDrop={drop}></div>
     <div className='box' onDragStart={start} onDragOver={over} onDragLeave={leave} onDrop={drop}></div>
    </div>
    </>
    )
}

export default Drag