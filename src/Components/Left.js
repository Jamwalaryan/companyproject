import React from 'react'
import './Left.css'
import { FiPlusSquare } from 'react-icons/fi'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'
import {PiToggleLeftDuotone} from 'react-icons/pi'
import {TiLocationArrow} from 'react-icons/ti'
import {TbSunrise} from 'react-icons/tb'
import {TbSunset} from 'react-icons/tb'
import {WiDaySunny} from 'react-icons/wi'
function Left() {
    return (
        <div className='container'>
            <div className='head'>
                <span className='head-1'>
                <FiPlusSquare  className='icon'/> 
                <PiDotsThreeOutlineFill  className='icon'/> 
                <PiToggleLeftDuotone className='icon'/> 
                </span>
                <div className='break'>
               <div>
               <h5 className='head-2'><TiLocationArrow/>New York,USA</h5>
               <span>Today 28 sept</span>
            </div>
            <div>
               <p> <TbSunrise/>  07:19</p>
               <p> <TbSunset/>  19:32</p>
               
            </div>
            </div>
            <div className='head-3'>
            <p className='degree'>27°C</p>
            <p><WiDaySunny/>Sunny</p>
            </div>
            </div>
            <img src='https://c8.alamy.com/comp/DKCKDX/cartoon-style-drawing-of-a-city-in-the-sun-DKCKDX.jpg' className='img'
            alt=''/>

        </div>
    )
}

export default Left