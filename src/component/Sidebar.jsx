import React, { useState } from 'react'
import Logo from './imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../Data/Data'
import { SideData } from '../Data/Data'
import { Side } from '../Data/Data'
import {FaRegDotCircle} from 'react-icons/fa'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Sidebar = () => {

const [selected, setSelected, ] = useState(0)
const [selected1, setSelected1, ] = useState(0)
const [selected2, setSelected2, ] = useState(0)

  return (
      <div className="Sidebar">
          {/* logo */}
          <div className="logo">
              <img src={Logo} alt="logo" />
              <span>
                  Re<span>a</span>ct
              </span>
              <div id="dot">
              <FaRegDotCircle/>
              </div>
          </div>
          <div className='Profile'>
          <div className='Pic'>
           <img id='Pf' src='creed.jpg' alt='' />
        </div>
        <div>
              <div className='P1'>Minimal UI</div>
              <div className='P2'>admin</div>
         </div>
          </div>
          {/* menu */}
          <div className="menu">
                 <div>
                  GENERAL
                  </div>
         </div>
             {SidebarData.map((item, index)=>{
                 <div>sahitya</div>
             return(
                 <div className={selected===index?'menuItem active': 'menuItem'}
                 key={index}
                 onClick={()=>setSelected(index)}
                 >
                     <item.icon/>
                     <span>
                         {item.heading}
                     </span>
                 </div>
                )
             })}
             <div className="menu">
                 <div>
                  MANAGEMENT
                  </div>
         </div>
              {SideData.map((items, indexs)=>{
             return(
                 <div className={selected1===indexs?'Item active:after': 'Item'}
                 key={indexs}
                 onClick={()=>setSelected1(indexs)}
                 >
                     <items.icons/>
                     <span>
                         {items.headings}
                         <MdKeyboardArrowRight className='arrow'/>
                     </span>
                     
                 </div>
                )
             })}
             <div className="menu">
                 <div>
                  APP
                  </div>
         </div>
              {Side.map((item1, index1)=>{
             return(
                 <div className={selected2===index1?'It active:after': 'It'}
                 key={index1}
                 onClick={()=>setSelected2(index1)}
                 >
                     <item1.icon1/>
                     <span>
                         {item1.heading1}
                     </span>
                     <div className="mailcount">2</div>
                 </div>
                )
             })}
      </div>
   )
}


export default Sidebar
