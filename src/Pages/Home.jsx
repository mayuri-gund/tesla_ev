import React from 'react'
import "../App.css"
import IntroCards from '../Components/Cards/IntroCards'
import RoundCard from '../Components/Cards/RoundCard'
import Carousal from '../Components/Carousal/Carousal'
import ListHerosection from '../Components/ListHerosection/ListHerosection.jsx'
 const Home = () => {
  return (
    <>
    <div className='imageScooter'>

      <img src='Images/Scooter (1).jpg' alt='img' style={{width:"100%" , height:"30%"}}/>
    </div>
        <ListHerosection/>
        <Carousal/> 
        <IntroCards/>
        <RoundCard/>
        
       
     
   </>
  )
}

export default Home
