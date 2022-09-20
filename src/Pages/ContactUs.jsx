import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
      <h1 style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingBottom: '50px', paddingTop: '35px' }}>Connect With Us!</h1>
      <div id="content" className="flex">

        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row">

              <div className="col-lg-6 md-6 sm-12">
                <div className="card_form">
                  <div className="card-header_form" style={{ fontSize: "40px", textAlign: "center" }}><strong>Contact Us</strong></div>
                  <div className="card-body" style={{ marginBottom: "80px" }} >
                    <form>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputName1">Name</label><input type="text" required="required" data-validation-required-message="Please enter your Name." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" /></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputMobileNo1">Mobile Number</label><input type="tel" required="required" data-validation-required-message="Please enter your Mobile Number." name="phone" pattern="[0-9]{10}" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number" /></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputEmail1">Email address</label><input type="email" required="required" data-validation-required-message="Please enter your Email id." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputCity1">Select Your City</label>
                        <select name="city" id="city" class="form-control" required="required" data-validation-required-message="Please Select Your City" aria-invalid="false">
                          <option value="">Select</option>
                          <option>Mumbai</option>
                          <option>Delhi</option>
                          <option>Pune</option>
                          <option>Pimpri Chinchwad</option>
                          <option>Satara</option>
                          <option>Akola</option>
                          <option>Nagpur</option>
                          <option>Amaravati</option>
                          <option>Wardha</option>
                          <option>Other</option>
                        </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputCourse1">EV Course</label><select name="course" id="course" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>Diploma in Electric Vehicle Battery Design Course</option>
                        <option>1 Day Workshop on Electric Vehicle Battery Design</option>
                        <option>Electric Vehicle Diploma for ITI Students</option>
                        <option>Not Applicable </option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputWebinar1">EV Webinar</label><select name="webinar" id="webinar" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>Electric Drive System Unit in EV: Design Requirements and Challenges</option>
                        <option>An Introduction to Safety of Electric Vehicle/Hybrid Electric Vehicle</option>
                        <option>Traction Motor Design: Design Requirements and Challenges</option>
                        <option>Not Applicable</option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputEvent1">EV Event</label><select name="event" id="event" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>AICTE Sponsered Workshop on Electric Vehicle Design</option>
                        <option>AICTE &amp; SPPU Sponsered STTP on Electric Vehicle Battery Storage</option>
                        <option>STTP on Electric Vehicle Powertrain</option>
                        <option>FDP on Electric Vehicle Battery Design</option>
                        <option>BTE Sponsered Vehicle Diploma Course for ITI Students</option>
                        <option>Not Applicable</option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputBusiness1">EV Business</label><select name="business" id="business" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>EV Retrofitments</option>
                        <option>EV Repairs and Services</option>
                        <option>EV Fleet/Share Business</option>
                        <option>EV Parts Sales</option>
                        <option>EV Dealership of EV Bikes</option>
                        <option>EV Dealership of EV Bicycle</option>
                        <option>EV Dealership of EV Auto-Rickshaw-3W</option>
                        <option>EV Dealership of EV EV-Loader-3W</option>
                        <option>EV Dealership of EV Cars</option>
                        <option>Not Applicable</option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputCollegeIndustry1">EV College/Industry</label><select name="college" id="college" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>IIT Bombay</option>
                        <option>IIT Gandhinagar</option>
                        <option>IIT Delhi</option>
                        <option>IIT Madras</option>
                        <option>IIT Dharwad</option>
                        <option>IIT Goa</option>
                        <option>VJTI Mumbai</option>
                        <option>GH Raisoni, Nagpur</option>
                        <option>GH Raisoni, Amravati</option>
                        <option>GH Raisoni, Pune</option>
                        <option>Govt. College of Engineering, Karad</option>
                        <option>Govt. College of Engineering, Amravati</option>
                        <option>COEP Pune</option>
                        <option>AISSMS Pune</option>
                        <option>VNIT Pune</option>
                        <option>PCCOE Pune</option>
                        <option>MIT-ADT Pune</option>
                        <option>MIT Kothrud</option>
                        <option>MIT Alandi</option>
                        <option>Auto India Racing Championship</option>
                        <option>Not Applicable</option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputInternship1">EV Paid Internship</label><select name="internship" id="internship" class="form-control" aria-invalid="false">
                        <option value="">Select</option>
                        <option>Interested</option>
                        <option>Not Interested</option>
                      </select></div>
                      <div className="form-group" style={{ fontSize: "20px", fontWeight: "500", marginTop: "10px" }}><label className="text-muted" for="exampleInputMessege">Message</label><textarea type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Message"></textarea></div>
                      <button type="submit" style={{ marginTop: "20px", marginBottom: "10px", }} className="btn btn-lg submitbtn">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 md-6 sm-12">
                <div className='secondcard_container'>
                  <div className='CardSecondForm SecondCard1' style={{ borderRadius: "10px", boxShadow: "0 2px 3px #4dbf1c", border: "1px solid #4dbf1c" }}>
                    {/* <div className='SecondCard1'> */}
                    <h3>Head Office</h3>
                    <p>Flat 11B, Darshan Park Building B, Behind Hotel Kunal, Kalewadi, Pimpri, Pune - 411017</p>
                    <h5>Electric Vehicles Training Center</h5>
                    <p>PCCOE, Akurdi, Pune</p>
                    <h5>All Types of Vehicles and Service Center:</h5>
                    <p>Mirajkar Automobiles, Dange Chowk, Pune</p>
                    <h6 style={{ textAlign: "left" }}>(Electric Vehicle Scooters, Electric Rickshaw & Electric Loader are Repaired and Serviced Here)</h6>
                    {/* </div> */}
                  </div>
                  <div className="col-lg-6 md-6 sm-12">
                    <div className='CardSecondForm SecondCard2' style={{ borderRadius: "10px", boxShadow: "0 3px 5px  #4dbf1c", }}>
                      {/* <div className='SecondCard2'> */}
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3635791499473!2d73.77490621487988!3d18.602709587361225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9060a019249%3A0x343660a12830aa51!2sTESLA%20EV%20Academy%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1663417512239!5m2!1sen!2sin" width="362.712px" height="315.438px" style={{ border: "0", boxShadow: "1px 3px rgba(0, 0, 0, .05)", borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="col-lg-6 md-6 sm-12">
                    <div className='CardSecondForm SecondCard3' style={{ borderRadius: "10px", boxShadow: "0 3px 5px #4dbf1c", border: "1px solid #4dbf1c" }}>
                      {/* <div className='SecondCard3'> */}
                      <h3 style={{ paddingBottom: "30px" }}>Contact</h3>
                      <h6 className='contact-link' style={{ textAlign: "left", paddingBottom: "10px" }}>Phone No.: <a style={{ color: "black" }} href=""> +91 9764001799 </a>(Whatsapp)</h6>
                      <h6 style={{ textAlign: "left", paddingBottom: "10px" }}>Monday to Sunday: 9.30 a.m. to 6.00 p.m.</h6>
                      <h6 className='email-link' style={{ textAlign: "left" }}>Email-id: <a style={{ color: "black" }} href="">director@teslaevacademy.com </a></h6>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgUmlIP_OY_ydy5axJBp1kIAuB9kJ3KUm3snSmlFRzeg1Afw/viewform"  target={"_blank"} style={{textDecoration:"none"}} ><button type="submit" style={{ marginTop: "20px", marginBottom: "50px", textAlign:"center"}} className="btn lastbtn"> State/Central Government EV Charging Station Property Tax Rebate for Residential Societies_Subject Matter Expert (Mr. Nitin Banait)</button></a>

      

    </>

  )
}

export default ContactUs

