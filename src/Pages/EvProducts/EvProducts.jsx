import React from 'react'
import "./EvProducts.css"
import { Link } from 'react-router-dom'

const EvProducts = () => {
  return (
    <>
    
    <h1 style={{color:"#4dbf1c", fontWeight:"700", fontSize:"50px"}}>EV Products</h1>
    <div style={{overflowX:"auto"}}>
 <table class="table table-hover table-bordered shadow p-4 mb-4 bg-white" style={{width:"80%",height:"80%",marginLeft:"150px"}}>
    <thead class="shadow p-4 mb-4 bg-#7cd955" style={{backgroundColor:"#7cd955"}} >
      <tr>
        <th style ={{ verticalAlign: "middle"}}scope="col">Product</th>
        <th style ={{ verticalAlign: "middle"}}scope="col">Product Name</th>
        <th style ={{ verticalAlign: "middle"}}scope="col">Industry Segment</th>
        <th style ={{ verticalAlign: "middle"}}scope="col">Subscription</th>
        <th style ={{ verticalAlign: "middle"}}scope="col">Status</th>
      </tr>
    </thead>
     <tbody class="shadow p-4 mb-4 bg-white">
       <tr >
         <td style ={{ verticalAlign: "middle"}}>Web & App Product</td>
         <td style ={{ verticalAlign: "middle"}}>Digital Garage</td>
         <td style ={{ verticalAlign: "middle"}}>Automotive</td>
         <td style ={{ verticalAlign: "middle"}}>1 Month/3 Months/6 Months/ 12 Months</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale</td>
       </tr>
       <tr>
         <td style ={{ verticalAlign: "middle"}}>Fleet/Delivery Business</td>
         <td style ={{ verticalAlign: "middle"}}>Delivery on Electric Vehicles</td>
         <td style ={{ verticalAlign: "middle"}}>Service</td>
         <td style ={{ verticalAlign: "middle"}}>1 Month/3 Months/6 Months/ 12 Months</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale </td>
       </tr>
       <tr>
         <td style ={{ verticalAlign: "middle"}}>EV Kits</td>
         <td style ={{ verticalAlign: "middle"}}>Retrofitment Kits - 2W/3W</td>
         <td style ={{ verticalAlign: "middle"}}>Product Development</td>
         <td style ={{ verticalAlign: "middle"}}>Minimum MOQ - 5 Sets</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale </td>
       </tr>
       <tr>
         <td style ={{ verticalAlign: "middle"}}>Charging Stations</td>
         <td style ={{ verticalAlign: "middle"}}>EV Charging with App</td>
         <td style ={{ verticalAlign: "middle"}}>Product Development</td>
         <td style ={{ verticalAlign: "middle"}}>1 Month/3 Months/6 Months/ 12 Months</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale </td>

       </tr>
       <tr>
         <td style ={{ verticalAlign: "middle"}}>Online School</td>
         <td style ={{ verticalAlign: "middle"}}>KG-12 Digital School</td>
         <td style ={{ verticalAlign: "middle"}}>Digital Product</td>
         <td style ={{ verticalAlign: "middle"}}>1 Month/3 Months/6 Months/ 12 Months</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale </td>
       </tr>
       <tr>
         <td style ={{ verticalAlign: "middle"}}>Online Professional Courses</td>
         <td style ={{ verticalAlign: "middle"}}>All Advance Technology</td>
         <td style ={{ verticalAlign: "middle"}}>Online/Hands on</td>
         <td style ={{ verticalAlign: "middle"}}>1 Month/3 Months/6 Months/ 12 Months</td>
         <td style ={{ verticalAlign: "middle"}}>Ready for Sale </td>
       </tr>
     </tbody>
  </table>
  </div>

  <h1 class="register-link"><Link to="./AboutUs"><i class="fa-solid fa-pen-to-square"></i> Register for Demo & More Details</Link></h1>



    
    
    
    </>
  )
}

export default EvProducts