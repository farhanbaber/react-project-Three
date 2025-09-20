import { useState } from 'react'
import './App.css'
import Nav from './components/nav.jsx'
import Hero from './components/Hero.jsx'  
import image1 from './assets/images/image one.jpeg'
import image3 from './assets/images/image three.jpeg'
import image2 from './assets/images/image two.jpeg'
function App() {

  return (
    <>
          <Nav/>

    <div className="container">
      <Hero
      img={image1}
      title="The Heritage"
      description="Timeless style, classic design. This is more than a watch—it's a legacy."
      />
      <Hero
      img={image3}
      title="The Explorer"
      description="Built for adventure, ready for anything. The perfect companion for the journey ahead.."
      />
      <Hero 
      img ={image2}
      title="The Zenith"
      description = "Caption: Sleek, modern, and perfectly crafted. Reaching for the peak of precision and style."
      />
      </div>
    </>
  )
}


export default App
