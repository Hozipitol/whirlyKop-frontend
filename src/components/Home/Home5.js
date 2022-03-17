import React from 'react';
import './Home5.css';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function Home5() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Does The Teacher Have An Intelligent Help Which Will:?" key="1">
<p>Strategic Program For The Class
Delivery Model For The Class
Checking And Scoring Tests
Personalized Student Engagement & Attention For All Levels Of Learners

</p>
          </Panel>
          <Panel header="Does the Student actually learn:" key="2">
<p>Intelligent System which will understand his “understanding” and “learning” levels
Recommend and guide
Learning with ease, grace and joy
</p>
          </Panel>
        
        </Collapse>
        <div className="quickSupport">
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>
  )
}

export default Home5