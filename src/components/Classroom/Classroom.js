import React, {useState} from 'react';
import './Classroom.css';
import Sidebar from '../Sidebar/Sidebar'
import Class from '../../images/Classimg.jpeg';

function Classroom() {
  const [meetLink, setMeetLink] = useState(false);
  
  const handleClick = () =>{
    setMeetLink(!meetLink);
  }
  return (
    <>
    <Sidebar />
   
    <div className="products">
      <div className="products_container">
        
        <h1>Classroom</h1>
        <button className="products_btn" onClick={handleClick}>Join Class</button>
        {meetLink ? <div class="link">Google Meet Link: <a href="https://meet.google.com/ups-rosq-zpz">https://meet.google.com/ups-rosq-zpz</a>
          <div className="img"><img src={Class} alt="img"></img></div>
        </div>: <></>}
      </div>
    </div>
    </>
  );
}

export default Classroom