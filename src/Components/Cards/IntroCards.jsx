import React from 'react'
import "./IntroCard.css"

const IntroCards = () => {
  return (
    <>
      <hr />


<div className='body'>

<div class="introContainer">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="Images/NitinBanait.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Mr. Nitin Banait</div>
             <div class="job">Founder &amp; CEO</div>
             <div class="job">IIT Bombay </div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="Images/NirantPatil.jpg" alt="" />
           </div>
           <div class="details">
             <div class="name">Mr. Nirant Patil</div>
             <div class="job">Academic &amp; Corporate Skill Accelerator - Director</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="Images/PrabhatRanjan.jpeg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Dr. Prabhat Ranjan</div>
             <div class="job">Skill Development - Director &amp; Mentor</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
        
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
           <img src="Images\ShirishMurthy.jpeg" />
           </div>
           <div class="details">
             <div class="name">Mr. Shirish Murthy</div>
             <div class="job">Cheif Operation Officer</div>
             <div class="job">Madhya Pradesh</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
           <img src="Images\DnyaneshRathod.jpeg" />
           </div>
           <div class="details">
             <div class="name">Mr. Dnyanesh Rathod</div>
             <div class="job"> Director </div>
             <div class="job"> Environmental Scientist </div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="Images/PrashantNehete.jpeg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Mr. Prashant Nehete</div>
             <div class="job">Co Founder & Global Director</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-linkedin"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
  




</div>
     













{/*
      <h3 style={{ "-webkit-text-align": "center", "text-align": "center", "color": "#4dbf1c", "font-weight": "500", "font-size": "45px", "padding-top": "50px" }}>Our Team</h3>
      <div className="introContainer">
        <div className="row-blog">
          <div className="col-md-12">
            <div id="blogCarousel" className="carousel slide" data-bs-ride="true">
              {/* Carousel items 
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row" style={{ "padding-top": "50px" }}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="our-team" id="first">
                        <div className="pic"  >
                          <img src="Images\NitinBanait.jpg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Mr. Nitin Banait</h3>
                          <span className="post">IIT Bombay - Drop Out</span>
                          <h4 style={{ "padding-bottom": "30px" }}>Founder &amp; CEO</h4>
                          <span className="post-link" style={{ "font-size": "25px" }}><a href><i className="fa-solid fa-download" />Profile</a></span>
                        </div>
                        <ul className="social">
                          {/* <li><a href><i className="fa-brands fa-youtube fa-2x" /></a></li> 
                          <li><a href><i className="fa-brands fa-facebook fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-linkedin fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="our-team" id="second">
                        <div className="pic">
                          <img src="Images\NirantPatil.jpg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Mr. Nirant Patil</h3>
                          <span className="post">IIT Bombay</span>
                          <h4>Academic &amp; Corporate Skill Accelerator - Director</h4>
                          <span className="post-link" style={{ "font-size": "25px" }}><a href><i className="fa-solid fa-download" />Profile</a></span>
                        </div>
                        <ul className="social">
                          {/* <li><a href><i className="fa-brands fa-youtube fa-2x" /></a></li> 
                          <li><a href><i className="fa-brands fa-facebook fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-linkedin fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="our-team" id="third">
                        <div className="pic">
                          <img src="Images\PrabhatRanjan.jpeg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Dr. Prabhat Ranjan</h3>
                          <span className="post">University of California, Berkeley</span>
                          <h4>Skill Development - Director &amp; Mentor</h4>
                          <span className="post-link" style={{ "font-size": "25px" }}><a href><i className="fa-solid fa-download" />Profile</a></span>
                        </div>
                        <ul className="social">
                          {/* <li><a href><i className="fa-brands fa-youtube fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-facebook fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-linkedin fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*.row
                </div>
                {/*.item
                <div className="carousel-item" id="second-carousal">
                  <div className="row" style={{ "padding-top": "50px" }}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="our-team" id="fourth">
                        <div className="pic">
                          <img src="Images\ShirishMurthy.jpeg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Mr. Shirish Murthy</h3>
                          <span className="post">Chief Operation Officer - Madhya Pradesh</span>
                        </div>
                        <ul className="social">
                          {/* <li><a href><i className="fa-brands fa-youtube fa-2x" /></a></li> 
                          <li><a href><i className="fa-brands fa-facebook fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-linkedin fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="our-team" id="fifth">
                        <div className="pic">
                          <img src="Images\DnyaneshRathod.jpeg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Mr. Dnyanesh Rathod</h3>
                          <span className="post">Director</span>
                        </div>
                        <ul className="social">
                          {/* <li><a href><i className="fa-brands fa-youtube fa-2x" /></a></li> 
                          <li><a href><i className="fa-brands fa-facebook fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-linkedin fa-2x" /></a></li>
                          <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*.row
                </div>
                {/*.item
              </div>
              {/*.carousel-inner
              <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/*.Carousel
          </div>
        </div>
      </div> */}
    </>



  )
}

export default IntroCards
