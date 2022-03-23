import React from 'react'
import './Home2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import wrld from '../../images/modern-design.jpg'
function Home2b() {
  return (
      <div className="conmap" >
      <br/>
          <div className="row" style={{ margin:"0% auto"}}>
        {/* <img src={wrld} style={{maxWidth:"500px", margin:"0 auto"}} height="200" alt="asd"  /> */}
        <span style={{maxWidth: "75%",fontSize:"x-large", textAlign:"center", wordBreak:"break-word", padding:"2%", margin: "0% auto"}}>    The market growth in APAC can be attributed to the presence of a large number of EdTech Startups and the huge demand for eLearning in the region. </span>
        </div>
      </div>
  )
}

export default Home2b