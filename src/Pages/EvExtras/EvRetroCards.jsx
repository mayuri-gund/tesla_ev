import React from 'react'


const EvRetroCards
    = ({ aCData }) => {
        return (
            <>
                <section className='allACDatas'>
                    {aCData.map((curElem) => {
                        const { id,
                            AC,
                            DC_Input_Voltage,
                            MaxCurrent,
                            MaxFrequency,
                            MotorCapacity,
                            Enclosure } = curElem;
                        return (
                            <>

                                <div class="card acRetro mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{AC}</h5>
                                                <p class="card-text">DC Input Voltage : {DC_Input_Voltage}</p>
                                                <p class="card-text">Mx Current : {MaxCurrent}</p>
                                                <p class="card-text">Max frequency : {MaxFrequency}</p>
                                                <p class="card-text">Motor Capacity : {MotorCapacity}</p>
                                                <p class="card-text">Enclosure : {Enclosure}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </section>
            </>

        )
    }
export default EvRetroCards;
