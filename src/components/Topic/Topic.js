import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Logo from '../Dashboard/Logo';
import "bootstrap/dist/css/bootstrap.css";
import Data from "./TopicData.js";
import './Topic.css'

function Topic() {
    const [inp, setInp] = useState("");

  const inputChange = (event) => {  // Get inpput from search 
    setInp(event.target.value);
  };

  return (
    <div>
    <Sidebar />
    <div className="container col1">
        <div className="img1">
          <Logo />
        </div>
        <p className="head1"> Whirlykop </p>
        <p className="title1"> Welcome to Whirlykop, please search for a topic. </p>
        <div className="container">
          <div className="row">
            <center>
              <div className="col-sm-6">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter Topic To Search"
                  onChange={inputChange}
                />
                <br />
               
              </div>
            </center>
          </div>
          <br />
          <div className="row">
            {Data.filter((val) => { // filter the data from Data.js and load the videos based on user input
              if (inp === "") {
                return null;
              } else if (val.title.toLowerCase().includes(inp.toLowerCase())) {
                return val;
              }
            }).map((val, key) => {
              return (
                <div className="col-lg-4">
                  <p style={{fontSize:"large"}}> {val.title.length > 30 ? `${val.title.substring(0,30)}...`:val.title} </p>
                  <iframe
                    key={key}
                    width="80%"
                    height="200"
                    src={val.src}
                    title={val.title}
                    frameBorder="10"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h6>{val.author}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topic