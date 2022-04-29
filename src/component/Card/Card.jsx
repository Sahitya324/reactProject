import React, { useState } from 'react'
import './Card.css'
import {AnimateSharedLayout} from 'framer-motion'

import{RiBarChartGroupedFill } from 'react-icons/ri';
const Card = (props) => {

    const [expanded, setExapanded] = useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded?(
                'Expanded'
            ):
            <CompactCard param={props} set/>
        }
    </AnimateSharedLayout>
  )
}

function CompactCard ({param}){
    const Png = param.png;
    const Png1 = param.series;
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        >
        <div className="radialBar">
         <span>{param.title}</span>
             <div className='Ic' style={{
            background: param.color.backGround1,
            color:param.color.Text,}}><Png/>
            <div className='P'>{param.percent}</div>
        </div>
        
         <span>{param.value}</span>
         
        </div>
        <div className="detail">
            <RiBarChartGroupedFill/>
          {/* <span><Png1/></span> */}
        </div>
        </div>
    )
}
export default Card
