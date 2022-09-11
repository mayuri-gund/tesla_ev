import React from 'react'


const TestCard = ({ testsData }) => {
  //  console.log(testsData);
  return (
    <>
    <section className='alltestDatas'>
      {testsData.map((curElem) => {
        const { id,
          Image,
          testName,
          Description,
          testLink,
          testDuration,
          NoOfQuestions,
          totalMarks } = curElem;
        return (
          <>
       
            <div class="card mb-3">
              <div class="row g-0">
                {/* <div class="col-md-4">
                  <img src={Image} class="img-fluid rounded-start" alt="..." />
                </div> */}
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{testName}</h5>
                    <p class="card-text">DESCRIPTION : {Description}</p>
                    <p class="card-text">TEST DURATION : {testDuration}</p>
                    <p class="card-text">NO OF QUESTIONS : {NoOfQuestions}</p>
                    <p class="card-text">TOTAL MARKS : {totalMarks}</p>
                    {/* <Link className="card-link" to={testLink}>
                      <button type="button" class="btn btn-danger" style={{ width: "95%" }}>GO TO TEST</button>
                    </Link> */}
                     <a href={testLink} target="_blank">
                     <button type="button" class="btn " style={{ width: "95%" , backgroundColor:"#4dbf1c" ,color :"black" }}>GO TO TEST</button>
                     </a>

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
export default TestCard