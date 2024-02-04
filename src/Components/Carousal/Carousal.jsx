import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
    return (

        <>
        {/* style={{paddingLeft:"10%" , paddingRight:"10%"}} */}
            <div className='outerDiv'>
                <div id="carousalImg" class="carousel slide innerDiv" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousalImg" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousalImg" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousalImg" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="Images/EVCSB.png" class="w-100 " alt="..." style={{paddingLeft:"5%" , paddingRight:"5%"}}/>
                        </div>
                        <div class="carousel-item">
                            <img src="Images/EVCSB2.png" class="w-100 " alt="..." style={{paddingLeft:"5%" , paddingRight:"5%"}}/>
                        </div>
                        <div class="carousel-item">
                            <img src="Images/EVCSB3.png" class="w-100 " alt="..." style={{paddingLeft:"5%" , paddingRight:"5%"}}/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousalImg" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousalImg" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default UncontrolledExample;