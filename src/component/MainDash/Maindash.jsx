import React from 'react'
import Cards from '../Cards/Cards'
import {FiSearch} from 'react-icons/fi'
import {FaUserFriends} from 'react-icons/fa'
import ReactCountryFlag from "react-country-flag"
import {BsFillBellFill} from 'react-icons/bs'
import Dashs from '../Dashs/Dashs'
import Db from '../Db/Db'
import './Maindash.css'

const Maindash = () => {
  return (
    <div className="Maindash">
      <div className="navbar">
        <div className="search">
        <FiSearch />
          <input type="text" placeholder="" />
          
        </div>
        <div className="items">
          <div className="item">
            <ReactCountryFlag
              countryCode="in"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US" 
                style={{
                  width: '2em',
                  height: '1em',
              }}
                className="icon" />
          </div>
          <div className="item">
            <BsFillBellFill className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FaUserFriends className="icon" />
          </div>
          <div className="item">
            <img
              src="creed.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
    </div>
           <Dashs/>
           <Cards/>
           <Db/>
    </div>
  )
}

export default Maindash
