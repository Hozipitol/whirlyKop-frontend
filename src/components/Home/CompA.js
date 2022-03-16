import React from 'react'
import './CompA.css'
import "bootstrap/dist/css/bootstrap.min.css"
import img1 from '../../images/ico1.png'
import img5 from '../../images/ico5.png'
import img2 from '../../images/ico2.png'
import img3 from '../../images/ico3.png'
import img4 from '../../images/ico4.png'
import img6 from '../../images/ico6.png'
import img7 from '../../images/ico7.png'

function CompA() {
return(
<div>
   <div class="container-fluid col1">
        <div class="row" >
            <h4> The Teaching Delivery Process Today...</h4>
        </div>
        <br/>
       <div class="row">
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                    <div style={{fontSize: "larger", fontWeight:500}}> Strategy For The Class
 </div>
                <div> <img src={img1} height="150px" alt="" /></div>
                <div> 
                    <ul> 
                      
                        <li>What is the class like?</li>
                        <li>How will maximum kids learn?</li>
                        <li>What to teach generating interest? </li> 

                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                <div style={{fontSize: "larger", fontWeight:500}}> Plan For The Class </div>
                <div>  <img src={img2} height="150px" alt="" /></div>
                <div> 
                    <ul> 
                      
                        <li>How To Plan Optimally?</li>
                        <li>What Is The Best Content From Audio-video/Vr/Text/Blogs?</li>
                        

                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                <div style={{fontSize: "larger", fontWeight:500}}> Delivery To The Class
 </div>
                <div>  <img src={img3} height="150px" alt="" /></div>
                <div> 
                    <ul> 
                      
                        <li>How To Teach With Interesting Content Delivery?</li>
                        <li>Are All Students Learning?</li>
                        

                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg-3" style={{ marginBottom: "1%"}}>
            <div class="card ca">
            <div style={{fontSize: "larger", fontWeight:500}}> Evaluating The Class
 </div>
                <div>  <img src={img4} height="170px" alt="" /></div>
                <ul>
                <li> Ensure To Check All Answer Sheets Without Bias And On Time </li>
                <li>  </li>
                </ul>
                </div>
            </div>

        </div>
        <div class="row" style={{width:"90%", padding: "2%", textAlign: "center"}}>
            <div class="col li"><img src={img5} height="80%" alt=""/></div>
            <div class="col" style={{}}>
            <div  style={{fontSize: "larger", fontWeight:500}}> Insights From The Class
 </div>
                <ul>
                   
                    <li>Who Are The Bottom Graders?</li>
                    <li>What To Improve In Slow Learners?</li>
                    <li> Is Anyone Suffering From Depression Or Anxiety Or Needs Attention?</li>
                </ul>
</div>
        
    </div>
    </div>
  
    
    <div class="container-fluid col2">
        <div class="row">
            <h4> Whirlykop - The Metaverse Of Enabled Learning </h4>
        </div>
        <br/>
       <div class="row">
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                    <div style={{fontSize: "larger", fontWeight:500}}> Strategy For The Class
 </div>
                <div> <img src={img1} alt="" height="150px" /></div>
                <div> 
                    <ul> 
                      
                    <li style={{color: "red", fontSize: "larger", fontWeight: 500}}>Topic2content Helper Is A Recommender System </li>
                            <li>To Understand The Class Topic And Recommend Paid And Non-paid Content
</li>
                        
                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                <div style={{fontSize: "larger", fontWeight:500}}> Plan For The Class </div>
                <div>  <img src={img2} alt="" height="150px" /></div>
                <div> 
                    <ul> 
                      
                    <li style={{color: "red", fontSize: "larger", fontWeight: 500}}>Automatic Class Planner </li>
                        <li>With Videos, Audio, Tests  </li>
                        <li>What Is The Best Content From Audio-video/Vr/Text/Blogs?</li>
                        

                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg" style={{ marginBottom: "1%"}}>
                <div class="card ca">
                <div style={{fontSize: "larger", fontWeight:500}}> Delivery To The Class </div>
                <div>  <img src={img3} alt="" height="150px" /></div>
                <div> 
                    <ul> 
                      
                    <li style={{color: "red", fontSize: "larger", fontWeight: 500}}>Iwatch Is A Neural Psychometric Engine </li>
                        <li>Which Runs During The Class And Observes The Engagement, Interactions, Emotional Quotient  And Behavior
</li>
                        

                    </ul>
                </div>
                </div>
            </div>
            <div class="col-lg-3">
            <div class="card ca">
            <div style={{fontSize: "larger", fontWeight:500}}>Evaluating The Class </div>
                <div>  <img src={img7} alt="" height="170px" /></div>
                <ul>
                <li style={{color: "red", fontSize: "larger", fontWeight: 500}}> Swayam</li>
                <li>  Which Will Help Checking All Answer Sheets And Scoring Them To Performance By Student
</li>
                </ul>
                </div>
            </div>

        </div>
        <div class="row" style={{width:"90%", padding: "2%"}}>
            <div class="col in"><img src={img6} alt="" height="150px"/></div>
            <div class="col">
            <div  style={{fontSize: "larger", fontWeight:500}}> Insights From The Class
 </div>
                <ul>
                   
                    <li  style={{color: "red", fontSize: "larger", fontWeight: 500}}>Dhruv</li>
                    <li>A Detailed Advanced Insights Report Derived From Each Student Learnt Organically And Inorganically. The Engine Will Also Details If Any Student Requires Special Attention. 
</li>
                    <li> Is Anyone Suffering From Depression Or Anxiety Or Needs Attention?</li>
                </ul>
</div>
        
    </div>
    </div>
   
</div>

);
}
export default CompA;