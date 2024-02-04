import React from 'react'
import "./AboutUs.css"
import TeamMembers from './teammembers'



const AboutUs = () => {
  return (
    <>




<h1 style={{ color: '#4dbf1c', fontWeight: 700, fontSize: '50px', textAlign: 'center', paddingBottom: '50px', paddingTop: '35px' }}>About Us</h1>


      <section class="fristsection">
        <div class="main">
          <div class="secondhalf">
            <img src="Images/NitinBanait.jpg" alt="laptop img" style={{ borderRadius: "120px", height: "200px", width: '200px',  }} />
            <h3 style={{ textAlign: "center" }}>Nitin Banait</h3>
            <h6 style={{ textAlign: "center" }}><b>Founder & CEO</b></h6>
          </div>
          <div class="fristhalf">
            <p class="smalltext"><b>TESLA EV Academy</b> brand is the brain-child of<b> Mr. Nitin Banait,</b> he has been in EV Industry for more than decade. Currently he is the Director of our prestigious academy. He has spent more than 4.5 years for his research work at from Indian Institute of Technology Mumbai, one of the premier Education Establishments of our country. Mr. Nitin is dedicated towards his work and want to develop a deep understanding of Electric Vehicle Industry among his students. He has inspired more than 5000 students from all over the country using his skills and understanding of the industry. He also lets his students take advantage of his network of thousands of professionals spread all across the globe to help them learn better. </p>
          </div>
        </div>
      </section>
      {/* <hr  className='hrpara' style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} /> */}
      


      <div className='MotoPara' >

        <h3 style={{ textAlign: "center", marginTop: "1%", marginBottom: "2%", color: "#4dbf1c" }}>OUR TEAM MOTO</h3>
        <p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Mr. Nitin strongly believes in the harm caused by pollution of petrol/diesel vehicles, he urges his students to move towards electric vehicles. He is not only a teacher but a preacher too, he has driven more than 50000 kms on his personal E-Car, E-Scooter and E-Bike.
        </p>
        <p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mr. Nitin has delivered several lectures and conducted workshops on several occasions in more than 50 colleges across the country. He has also been a consultant to several firms in our country and provided job guidance to aspirants. He is also a published researcher, he has published an ANSYS case study on Nuclear Power Plant and more than 10 research papers in National and International conferences.
        </p>
        <p style={{ textAlign: "justify" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Academy is a joint venture between <b>Rising Sun Technologies, Pune, M/s. Fedilae Electric, Pune & M/s. Envee Wheels Pvt Ltd,</b>  Pune will complement the strength of Technical Expertise & Manufacturing Excellence so that the<b> students/professionals will get hands on Electric Scooters, Bike and knowledge </b>about EV domain.

        </p>


      </div>
      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />
      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />


      <h2 style={{ textAlign: "center", marginTop: "2%", marginBottom: "4%", color: "#4dbf1c" }}>Core Management Team</h2>





      <div class="containerabout">
        <div class="box">
          <div class="image">
            <img src="Images/NirantPatil.jpg" />
          </div>
          <div class="name_job">Nirant Patil</div>

          <p style={{ textAlign: "center" }}>Academic & Corporate Skill<br /> Accelerator - Director</p>

        </div>
        <div class="box">
          <div class="image">
            <img src="Images/PrabhatRanjan.jpeg" alt="" />
          </div>
          <div class="name_job">Dr. Prabhat Ranjan</div>

          <p style={{ textAlign: "center" }}> Skill Development - Director <br /> & Mentor</p>

        </div>
        <div class="box">
          <div class="image">
            <img src="Images/udaySheore.jpg" alt="" />
          </div>
          <div class="name_job">Dr. Uday Sheore</div>

          <p style={{ textAlign: "center" }}>Consultant - Renewable Energy <br /> & Agrowaste</p>
        </div>
        <div class="box" style={{ marginBottom: "2%" }}>
          <div class="image">
            <img src="Images/DnyaneshRathod.jpeg" alt="" />
          </div>
          <div class="name_job">Mr. Dnyanesh Rathod</div>

          <p> Director</p>
        </div>
      </div>

      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />
      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />

      
      
      <h2 style={{ textAlign: "center", marginTop: "3%", color: "#4dbf1c" }}>Advisory Management Board</h2>

      <section className='advisoryM' style={{ marginTop: "2%" }}>





        <div class="card" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "5%" }}>
          <div class="row no-gutters">
            <div class="col-sm-5">
              <img class="card-img" src="Images/NRamkrishnan.jpg" alt="Suresh Dasari Card" />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Prof. N. Ramakrishnan</h5>
                <h6 style={{ textAlign: "left", marginLeft: "4px" }}>Chairman - Advisory Board</h6>
                <p class="card-text"> Professor (PhD), IIT, Gandhinagar
                  Sensors and Automation Expert
                  46 Years of IIT Teaching Experience</p>
              </div>
            </div>
          </div>
        </div>


        <div class="card" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "5%" }}>
          <div class="row no-gutters">
            <div class="col-sm-5">
              <img class="card-img" src="Images/PrabhatRanjan.jpeg" alt="Suresh Dasari Card" />
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">Dr. Prabhat Ranjan</h5>
                <h6 class="card-text" style={{ textAlign: "left" }}>Skill Development - Director & Mentor  </ h6 >
                {/* Skill Development - Mentor  <br /> */}
                <p style={{ marginLeft: "4px" }}> PhD - University of California, Berkeley</p>
              </div>
            </div>
          </div>
        </div>





      </section>

      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />
      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />





      <h3 style={{ textAlign: "center", marginTop: "3%", marginBottom: "2%", color: "#4dbf1c" }}>OUR TEAM MEMBERS</h3>
      <p style={{ textAlign: "center" }}><b>All our faculties are working closely on Electric Vehicles and are always updated with the latest trends in EV Industry.<br /> Some of us are in teaching industry for more than a decade.</b></p>


      <TeamMembers />
      <hr style={{ textAlign: "center", width: "80%", marginLeft: "auto", marginRight: "auto", border: "3px solid #4dbf1c" }} />



    </>




  )
}

export default AboutUs