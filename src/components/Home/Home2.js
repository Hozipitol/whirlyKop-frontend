import React from 'react'
import './Home2.css'
import "bootstrap/dist/css/bootstrap.min.css";
import wrld from '../../images/modern-design.jpg'
function Home2() {
  return (
    <div id="about" className="cov block aboutBlock">
      <div className="container-fluid">
        <div className="row titleHolder">
          <span style={{fontSize:"xx-large", margin:"0% auto"}}>Attractive Oppourtunities in the Edtech and smart classroom market</span>
          <p></p>
        </div>
       <br/>
     
      
        <div className="row">
          <div className="col" style={{padding:"2%"}}>
          <span style={{fontSize:"xx-large"}}>85.8 </span>
          <span style={{fontSize:"large"}}>USD Billion 2020-e </span>
          <div className="progress">
          
  <div className="progress-bar progress-bar-striped bg-dark progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}></div>
</div>
          </div>
          <div className="col" style={{padding:"2%"}}>
          <span style={{fontSize:"xx-large"}}>181.3 </span>
          <span style={{fontSize:"large"}}>USD Billion 2025-p </span>
          <div className="progress">
          
  <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}></div>
</div>
          </div>
        </div>
     
<span style={{fontSize:"x-large", padding:"2%", margin:"0% auto"}}>The global Edtech and smart classroom market is expected to reach USD 181.3 billion by 2025 growing at CAGR is 16.1% during the forecast period </span>
   
        

        </div>
       
    </div>
  )
}

export default Home2