import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Emoji from './ReportComponents/Emoji'
import StuData from './StudentData.js';
import ReportChart from './ReportComponents/ReportChart';
import Sidebar from '../Sidebar/Sidebar'

function Report() {
    const [stud, setStud] = useState("Select Student"); //For selecting current chosen student
  const [attend, setAttend] = useState(900);  //Avg of students attentiveness( to get class attentive and pass props to the emoji)
  
  const value=[];
 let j = 0;
  useEffect(()=>{   // Check the Attentiveness of the students in the class and get the avg.
    StuData.map(val => {return(
      value.push(val.atten_per)
    )
    
  })
  
  for(let i = 0; i < value.length;i++){
    j=j+value[i];
    
  }
  j=Math.round(j/value.length)
  setAttend(j);
  
  },[attend])

  const handleOnChange = (e) => { //to check which select option user has chosen. so as to map and show the related data of the chosen student
    setStud(e.target.value);
  };
  return (
    <>
        <Sidebar />
        <div className="container">
      
      <div className="row">
        <h3> Class Report</h3>
        <h5> Class Attention </h5>

        <Emoji name={attend}/>
        <p>
          {" "}
          Well Done! <b>{attend}%</b> of the class was attentive during teaching.{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3> Student Report </h3>
        </div>
        <div className="col-md-12">
          <label>Student Name</label>
          <select
            className="form-select"
            style={{ width: "80vw" }}
            value={stud}
            onChange={handleOnChange}
          >
            <option value="Select Student">Select Student</option>
            {
              
              StuData.map((options, key) => 
                
                  <option key={key} value={options.name}>{options.name}</option>
                
              )
            }

          </select>

          <br />
        </div>

        {StuData.filter((val) => {    // filter the data to display only the student that was chosen
      if (stud === "Select Student") {
        return null;
      } else if (val.name.includes(stud)) {
        return val;
      }
    }).map((val, key) => {
      return (
        <div key={key}>
          <div className="container">
          <div className="row">
            <div className="col-md-3">
            <img src={val.img_src}/> 
            </div>
            <div className="col-md-6">
            <p style={{fontSize:"x-large", fontWeight:"600"}}>
            {val.name}
            
            
            </p>
            <p>
            <span style={{fontSize:"large", fontWeight:"600"}}>Class:</span>
             &nbsp; {val.board} (Class {val.class}), Section {val.sec}
            
            
            </p>
            <p><span style={{fontSize:"large", fontWeight:"600"}}>Topic:</span>
             &nbsp; {val.Topic}</p>

            </div>
            </div>

          </div>
          < ReportChart data={val.data} />
          <br />
          <div>
             <h2>Summary</h2>
             <p>{val.name} was attentive {val.atten_per}% in the class</p>
             <p>{val.name} understood {val.under_per}% of the class</p>
          </div>
          <br />
          <div width="100%">
            <h2>Attention Map</h2>
            <img src={val.atten_src} width="80%" />
          </div>
        </div>
      );
    })}
    <h1>{StuData.name} </h1>
      </div>
      
    </div>

    </>
  )
}

export default Report