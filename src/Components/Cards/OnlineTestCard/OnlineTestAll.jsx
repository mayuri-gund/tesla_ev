import React from 'react'
import TestCard from "./TestCard"
import './OnlineTestCard.css'
import Tests from "./ApiOnlineTestCard.js"
import { useState } from 'react'

const OnlineTestAll = () => {

    const [testsData, setTestsData] = useState(Tests);

  return (
    <>
    <h2 style={{marginTop:"3%" , textAlign:"center" , color:"#4dbf1c" , fontSize:"300%"}}>Online Test in EV Domain</h2>
    <h5 style={{ textAlign:"center" , color:"#4dbf1c" }}>To Upgrade skill and knowledge in EV Domain</h5>
    <div className='AlltestDatas'>
      <TestCard testsData ={testsData}/>
    </div>
    
    </>
  )
}  

export default OnlineTestAll
