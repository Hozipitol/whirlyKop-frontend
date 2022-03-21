import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Team.css';
import Rahul from "../../images/rahul_sir.png";
import Arun from "../../images/arun_sir.png";
import Dominic from "../../images/dominic_sir.png";
import Roy from "../../images/roy_sir.png";
import Amit from "../../images/amit_sir.png";

function Team() {
  return (
    <div>
      <div class="cont1">
        <div class="row  ">
          <div class="col-md-5">
            <div >
              <img alt="/" src={Rahul} class="teamimg" />
              <br />
              <h3>Rahul Nathan, PMP </h3>
              <h4>Trustee</h4>
            </div>
          </div>
          <div class="col-md-7">
            <p class="teaminfo" >
            <ul>
              <li>Rahul Nathan Is Leading This Project.</li>
              <li>Rahul Brings About 20+ Years Of Industry Experience In The Hospitality, Information Technology, Entrepreneurship And Entertainment Industry . He Done Casting For A Few Advertisements Having Been Part Of Several Entertainment Ventures.</li>
              <li>He Has Won Several Awards And Accolades In The Information Technology Space, Some Of Them Being First In India. </li>
              <li>Currently He Is The CEO Of Unruffled Feathers Enterprises Private Limited which Is A Fully Technology Enabled Internet Of People Platform Solving The Business Needs related to people.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div class="cont2">

        
        <div class="row  ">
          <div class="col-md-5">
            <div >
              <img src={Arun} alt="/" class="teamimg" />
              <br />
              <h3 style={{color:"#ffffff"}}>Arun Kumar Nathan </h3>
              <h4 style={{color:"#ffffff"}}>Business Strategy</h4>

            </div>
          </div>
          <div class="col-md-7">
            <p class="teaminfo2" >
            <ul>
              <li>Arun Brings 40+ Years Of Experience In Leading Large Multi-national Corporations And Adds An Edge In Corporate And Economies Of Scale Strategy. </li>
              <li>An Alumni Of Birla Institute Of Technology, Mesra And IIIM Ahmedabad Besides Having Participated In Several Other Technical And Management Training Programs ,He Brings A Wealth Of Managerial And Leadership Experience Through His Multiple Domain Knowledge And Wide Network Of Acquaintances.</li>
              <li>He Was In Senior Managerial Positions In Siemens Across Germany , Iran And India And Later CEO Of The Indian Subsidiary Of The German Mnc Rittal And Later Served As Advisor And Member Of The Board Of Several Other Mncs established In India.</li>
              <li>He Was In Senior Managerial Positions In Siemens Across Germany , Iran And India And Later CEO Of The Indian Subsidiary Of The German Mnc Rittal And Later Served As Advisor And Member Of The Board Of Several Other Mncs established In India.</li>
              <li>Besides Being Skilled In All Aspects Of Management Arun Also Is Widely Travelled Across The Globe And Is Fluent In Many Languages Including German .  </li>
              <li>He Is The Founder Of Unruffled Feathers Enterprises Private Limited. </li>
            </ul>
            </p>
          </div>
        </div>
      </div>

      



      <div class="cont1">
          <div class="row  ">
            <div class="col-md-5">
              <div >
                <img alt="/" src={Dominic} class="teamimg" />
                <br />
                <h3>Dominic Pereira</h3>
                <h4>Strategic Problem Solver</h4>

              </div>
            </div>
            <div class="col-md-7">
              <p class="teaminfo" >
              <ul>
                <li>With 20+ Years Of Deep Cross-cultural Exposure, He Has Built A Reputation For Delivering Strong Outcomes On Global Projects In India, USA, Australia, South Africa And Kenya.</li>
                <li>He Is Experienced In Contact Center Operations, Customer Service Centers, Change /Re-engineering Projects, Talent Development And Cross-cultural Communication, Learning & Development & Human Resources.</li>
                <li>He Is Instrumental In Designing Of Learning Content, Facilitation And Providing On-going Coaching For Targeted Business Needs, Defining Training Roadmaps, Process Mapping, L & d Structures And Re-defining Customer Experience And People Management In The HR Space.</li>
                <li>"Passion Drives Excellence" Is His Mantra.</li>
                <li>He Is Driving HR And Operations For Whirlykop.</li>
              </ul>

              </p>
            </div>
          </div>
      </div>

      <div class="cont2">
          <div class="row  ">
            <div class="col-md-5">
              <div >
                <img alt="/" src={Roy} class="teamimg" />
                <br />
                <h3 style={{color:"#ffffff"}}>Dr. Chiranjiv Roy</h3>
                <h4 style={{color:"#ffffff"}}>Technology Advisor</h4>

              </div>
            </div>
            <div class="col-md-7">
              <p class="teaminfo2" >
             <li>Dr. Chiranjiv Roy Brings 20+ Years Of Data Driven Digital Product Development Experience Working Across Sectors Like Banking, Manufacturing, Automobile And Media Industry With Fortune 100 Companies As Nissan Motors, Mercedes Benz And Hewlett Packard.</li>
             <li>He Holds A Phd In Applied Data Analytics (Research Grant From Mercedes Benz) With Research Across Max Planck University, Germany And Iit  Bhu, India And Also Filed 28+ Patents Across His Career In Areas Of Artificial Intelligence And Digital Product Development.</li>
             <li>He Is A Forbes Technology Council Member 2021, Also Holds Advisory Positions In International Group Of Artificial Intelligence (Igoai, Middle East) And Visiting Faculty For Various Iims And Iits In India.</li>
             <li>As The Product Development Head And Chief Data Science Advisor for WhirlyKop, Dr Roy Has Developed The Algorithms And Architecture And Driving It To The Product.</li>


              </p>
            </div>
          </div>
      </div>
      
      <div class="cont1">
          <div class="row  ">
            <div class="col-md-5">
              <div >
                <img alt="/" src={Amit} class="teamimg" />
                <br />
                <h3>Amit Ranjan Gupta
</h3>
                <h4>Leadership Team</h4>

              </div>
            </div>
            <div class="col-md-7">
              <p class="teaminfo" >
              <li>Amit Brings 12+ Years Of Leadership Experience Across It, Banking And Finance, Fintech.  </li>
              <li>An Alumni Of Indian School Of Business ,Hyderabad And Icici Bank Business Leadership Program, He Brings A Wealth Of Managerial And Leadership Experience In B2b Business Development, Corporate Banking, Product Growth, Strategy And Fund Raising.</li>
              <li>He Was In Leadership Positions  On 0-1 Stints As Head Of Product And Business Across India.  He Is Product Growth Mentor Of Multiple Start Ups And Part Of Advisory Board.</li>
              <li>With Tons Of Experience Across It, Banking And Finance And Tech, He Has Proven Track Record Of Helping Founders In Monetizing Their Idea In Internet/Tech Space. </li>

              </p>
            </div>
          </div>
      </div>


      
    </div>






  )
}

export default Team