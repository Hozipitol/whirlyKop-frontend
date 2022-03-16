import React from 'react'
import './CompB.css'
import "bootstrap/dist/css/bootstrap.min.css"
import img1 from '../../images/ico1.png'
import img2 from '../../images/ico2.png'
import img3 from '../../images/ico3.png'
import img6 from '../../images/ico6.png'
import img7 from '../../images/ico7.png'
function CompB() {
  return (
    <div>
     
        <div class="table table-responsive">
          <table class="table  table-dark">
            <thead>
              <tr>
                <th class="table-info">    <h4>     Teaching Process        </h4> </th>
                <th class="table-danger">    <h4>        Existing Techniques   </h4>   </th>
                <th class="table-success">  <h4>WhirlyKop Techniques </h4></th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="table-info">
                  <div class="row">

                    <div class="col-lg"><img src={img1} height="100px" alt="" /> </div>
                    <div class="col-lg"> <h5>  Strategy For The Class </h5></div>

                  </div>

                </td>
                <td class="table-danger">
                  <ul>
                    <li> What to teach generating interest? </li>
                    <li> What is the class like? </li>
                    <li>How will maximum kids learn</li>
                  </ul>
                </td>
                <td class="table-success">
                  <ul>
                    <li style={{ fontSize: "larger", fontWeight: 500 }}> Topic2content Helper Is A Recommender System </li>
                    <li> Helps To Understand The Class Topic  </li>
                    <li>Recommend Paid And Non-paid Content</li>
                  </ul>
                </td>

              </tr>
              <tr>
                <td class="table-info">
                  <div class="row">
                    <div class="col-xl"><img src={img2} height="100px" alt="" /> </div>
                    <div class="col-xl"> <h5>  Plan For The Class </h5></div>
                  </div>

                </td>
                <td class="table-danger">
                  <ul>

                    <li>How To Plan Optimally?</li>
                    <li>What Is The Best Content From Audio-video/Vr/Text/Blogs?</li>


                  </ul>
                </td>
                <td class="table-success">
                  <ul>

                    <li style={{ fontSize: "larger", fontWeight: 500 }}>Automatic Class Planner</li>
                    <li>With Videos, Audio, Tests</li>


                  </ul>
                </td>

              </tr>
              <tr>
                <td class="table-info">
                  <div class="row">
                    <div class="col-lg"><img src={img3} height="100px" alt="" /> </div>
                    <div class="col-lg"> <h5> Delivery To The Class</h5></div>
                  </div>

                </td>
                <td class="table-danger">
                  <ul>

                    <li>How To Teach With Interesting Content Delivery?</li>
                    <li>Are All Students Learning?</li>


                  </ul>
                </td>
                <td class="table-success">
                  <ul>

                    <li style={{ fontSize: "larger", fontWeight: 500 }}>Iwatch Is A Neural Psychometric Engine </li>
                    <li>Which Runs During The Class And Observes The Engagement, Interactions, Emotional Quotient  And Behavior
                    </li>


                  </ul>
                </td>

              </tr>
              <tr>
                <td class="table-info">
                  <div class="row">
                    <div class="col-lg"><img src={img7} height="80px" alt="" /> </div>
                    <div class="col-lg"> <h5> Evaluating The Class</h5></div>
                  </div>

                </td>
                <td class="table-danger">
                  <ul>
                    <li> Ensure To Check All Answer Sheets Without Bias And On Time </li>
                    <li>  </li>
                  </ul>
                </td>
                <td class="table-success">
                  <ul>

                    <li style={{ fontSize: "larger", fontWeight: 500 }}>Swayam</li>
                    <li>  Which Will Help Checking All Answer Sheets And Scoring Them To Performance By Student
                    </li>


                  </ul>
                </td>

              </tr>
              <tr>
                <td class="table-info">
                  <div class="row">
                    <div class="col-lg"><img src={img6} height="100px" alt="" /> </div>
                    <div class="col-lg"> <h5> Insights From The Class</h5></div>
                  </div>

                </td>
                <td class="table-danger">
                  <ul>

                    <li>Who Are The Bottom Graders?</li>
                    <li>What To Improve In Slow Learners?</li>
                    <li> Is Anyone Suffering From Depression Or Anxiety Or Needs Attention?</li>
                  </ul>
                </td>
                <td class="table-success">
                  <ul>

                    <li style={{ fontSize: "larger", fontWeight: 500 }}>Dhruv</li>
                    <li>A Detailed Advanced Insights Report Derived From Each Student Learnt Organically And Inorganically. The Engine Will Also Details If Any Student Requires Special Attention.
                    </li>
                    <li> Is Anyone Suffering From Depression Or Anxiety Or Needs Attention?</li>
                  </ul>
                </td>

              </tr>
            </tbody>


          </table>


        </div>


      <div class="container-fluid c2">
        

        <div class="row">
          <div class="col-lg-12" style={{fontSize:"xxx-large"}}>
                 Pricing Plans
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
              <div class="card cd1">
                  <h4>Base</h4>
                   <hr/>
                   <ul>
                     <li><b>Topic2content</b> - Unlimited</li>
                     <li> <b>Automatic Class Planner </b> - 10 Free Planner </li>
                     <li><b>Iwatch</b> - 100mins Free</li>
                     <li><b>Swayam</b> - 2 Class Tests Free</li>
                     <li><b>Dhruv</b> - 2 Class Reports Free</li>
                   </ul>
                   <h5>Rs. 999 / month</h5>

              </div>
          </div>
          <div class="col-md-4">
              <div class="card cd2">
                  <h4>Gold</h4>
                   <hr/>
                   <ul>
                     <li><b>Topic2content</b> - Unlimited</li>
                     <li> <b>Automatic Class Planner </b> - Unlimited </li>
                     <li><b>Iwatch</b> - 300mins Free</li>
                     <li><b>Swayam</b> - 4 Class Tests Free</li>
                     <li><b>Dhruv</b> - 4 Class Reports Free</li>
                     <li><b>Cloud Database Management Services</b> - Paid on Actuals</li>
                     <li><b>Consulting Services</b>- Paid On Actuals</li>
                   </ul>
                   <h5>Rs. 1999 / month</h5>

              </div>
          </div>
          <div class="col-md-4">
          <div class="card">
                  <h4>Platinum</h4>
                   <hr/>
                   <ul>
                     <li><b>Topic2content</b> - Unlimited</li>
                     <li> <b>Automatic Class Planner </b> - Unlimited </li>
                     <li><b>Iwatch</b> - Unlimited</li>
                     <li><b>Swayam</b> - Unlimited </li>
                     <li><b>Dhruv</b> - 12 Class Reports Free</li>
                     <li><b>Byjus, Unacademic</b> - Free Subscription</li>
                     
                     <li><b>Cloud Database Management Services</b> </li>
                     <li><b>Consulting Services</b> </li>

                   </ul>
                   <h5>Rs. 3999 / month</h5>

              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompB