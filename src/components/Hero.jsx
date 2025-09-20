import React from 'react'

const Hero = ({img, title, description}) => {
  return (
    <>
 
    {/* <div className="container"> */}
     <div className="cards">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
     </div>
     {/* </div> */}
    </>
  )
}

export default Hero
