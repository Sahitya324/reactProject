import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'

import './Dashs.css'
const Dashs = () => {
  return (
    <div className="Dashs">
              <div className="DashContainer">
              <div className="RadialBar">
         <span>
             <div> 
                 Welcome Back,</div>
                
              <div>Minimal UI!</div>
             </span>
          <span>
              <p>If you are going to use a passage of Lorem Ipsum,
                  you <br></br>need to be sure there isn't anything
              </p>
          </span>
          
          <div>
          <button>Go Now</button>
          </div>
          
        </div>
        {/* <span className="Detail">
        <img src="promo.png" alt='' className='promo'/>
        </span> */}
          </div>

                <div className="Container">
                <Carousel className='Sahitya'>
                  <Carousel.Item className='Dragon'>
                  <div className='Kumar'>FEATURED APP</div>
                  <div className='Design'>Disney Zombies 2</div>
                  <div className='Dev'>Believing These 7 Myths About Event Keeps...</div>
                  </Carousel.Item>
                  <Carousel.Item className='Ball'></Carousel.Item>
                  <Carousel.Item className='Z'></Carousel.Item>
             </Carousel>
               </div>
    </div>
  )
}

export default Dashs
