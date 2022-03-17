import React from 'react';
import { Button } from 'antd';
import './Home1.css'

import { Carousel } from 'antd';

function Home1() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>

        
            <div className="container-fluid">
              <div className="content">
                <h3>Whirlykop</h3>
                <p>Learning in the Screen Age</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                </div>
              </div>
            </div>  
      
      </Carousel>
    </div>
  )
}

export default Home1