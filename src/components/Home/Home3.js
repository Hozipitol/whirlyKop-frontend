import React from 'react';
import image1 from '../../images/modern-design.jpg';
import 'antd/dist/antd.css';
import './Home3.css'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import Value from '../../images/value.png'
import Growth from '../../images/growth.png'
import Proft from '../../images/profits.png'
import Navigation from '../../images/navigation.png'


function Home3() {
  return (
    <div id="feature" className="block featureBlock bgGray">
    <div className="container-fluid">
      <div className="titleHolder">
        <h2>Features</h2>
      </div>
      <Row gutter={[16, 16]}>
       
        <Col  xl={{span:"6"}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={<img style={{ margin:"0 auto", maxWidth:"250px",maxheight:"220px", border:"1px solid black"}} alt="Modern Design" src={Value} />}
            style={{height:"100%", padding:"5%"}}
          >
            
            <h1 style={{fontSize:"large", marginTop:"10px", textAlign:"center", wordBreak:"break-word"}}>The growth of the market can be attributed during the growing demand for tech global slotutions due to Covid-19 pandemic </h1>

          </Card>
        </Col>
        <Col  xl={{span:"6"}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={<img style={{ margin:"0 auto", maxWidth:"250px",maxheight:"220px", border:"1px solid black"}} alt="Modern Design" src={Growth} />}
            style={{height:"100%", padding:"5%"}}
          >
            
            <h1 style={{fontSize:"large", marginTop:"10px",textAlign:"center", wordBreak:"break-word"}}>The continuosly increasing penetration in the mobile usage internet and availability of the Edtech infrastructure is boosting the growth of internet </h1>

          </Card>
        </Col>
        <Col  xl={{span:"6"}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable 
            cover={<img style={{maxWidth:"250px",maxheight:"250px", border:"1px solid black", margin:"0 auto"}} alt="Modern Design" src={Proft} />}
            style={{height:"100%", padding:"5%"}}
          >
            
            <h1 style={{fontSize:"large", marginTop:"10px",textAlign:"center", wordBreak:"break-word"}}>Acqusiitions and new product launches with incorporation AI would offer Oppurtunities for market players in coming years</h1>

          </Card>
        </Col>
        <Col  xl={{span:"6"}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card
            hoverable
            cover={<img style={{ maxWidth:"250px",maxheight:"250px", border:"1px solid black",margin:"0 auto"}} alt="Modern Design" src={Navigation} />}
            style={{height:"100%", padding:"5%"}}
          >
            
            <h1 style={{fontSize:"large", marginTop:"10px",textAlign:"center", wordBreak:"break-word"}}>The growth of the market can be attributed during the growing emand for teh global slotutions due to Covid-19 pandemic </h1>

          </Card>
        </Col>
      
      </Row>
    </div>
  </div>
  )
}

export default Home3