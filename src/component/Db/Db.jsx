import React, { useState} from 'react'
import './Db.css'
import Circular from '../Circular/Circular'
import {RiRecordCircleFill} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
import DatePicker from 'react-date-picker';
const Db = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="Db">
      <div className='Box1'>
              <div className="Rad">
             <div>
                 Current Download
                 <div className='circle'>
                 <Circular/>
                 </div>
             </div>
             
             </div>
             </div>
      <div className='Box2'>
      <div className="Rad1">
             <div>
                 Area Installed
                 <div className='Rad2'>
                 (+43%) than last year
             </div>
             </div> 
             
             <div>
             <div className='year'>
      <DatePicker className='month' format="y" onChange={onChange} value={value} yearPlaceholder="2022" calendarIcon={<IoIosArrowDown/>} clearIcon />
               <div className='Cn'>
               <span><RiRecordCircleFill color='#1ed14b'/> Asia</span>
               <span><RiRecordCircleFill color='yellow' className='am'/> America</span>
               </div>
    </div>
               </div>
             </div>
      </div>
    </div>
   
  )
}
export default Db
