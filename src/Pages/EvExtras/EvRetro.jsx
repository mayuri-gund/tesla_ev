import React from 'react'
import EvRetroCards from "./EvRetroCards.jsx"
import './EvRetro.css'
import AC from './EvRetroApi.js'
import { useState } from 'react'

const EvRetro = () => {

  const [aCData, setACData] = useState(AC);

  return (
    <>
      <h1 style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}>Online Test in EV Domain</h1>
      <div className='AC_Cards'>
        <EvRetroCards aCData={aCData} />
      </div>

    </>
  )
}


export default EvRetro