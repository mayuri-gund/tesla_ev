import React from 'react'
import Allproducts from '../Components/Cards/CoursesCard/Allproducts'

const EvCourses = () => {
  return (
    <>
      <div>
        <p style={{ fontSize: "50px", fontWeight: "700", color: "#4dbf1c", textAlign: "center", paddingTop: '35px' }}> EV Courses</p>
        <Allproducts />
      </div>
      <h1 className="JobsRegisterLink" style={{ textAlign: 'center' }}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfKId80psC3e7HX0iGvf1W1HfafaL5-m_Zs_5Ctvnl9ge70vw/viewform" target={"_blank"}><i className="fa-solid fa-pen-to-square" /> Register for Online &amp; offline EV courses</a></h1>
    </>
  )
}

export default EvCourses