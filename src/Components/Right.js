import React from 'react'
import './Right.css'
import { TbDots } from 'react-icons/tb'
import { WiHumidity} from 'react-icons/wi'
import {BsWind} from 'react-icons/bs'
import {BsCloudRain} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {TbTemperature} from 'react-icons/tb'
import {GiRaining} from 'react-icons/gi'

function Right() {
    return (
        <div className='container-1'>
            <div className='Head'>
                <div>
                    <h3>Welcome back Aryan!</h3>
                    <span>Check out today's weather information</span>
                </div>
                <TbDots className='icon' />
            </div>
            <img src='https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/90426/Screen_Shot_2020-06-12_at_3.56.00_PM.png' className='img-1'
                alt='' />

            <h3>More details of today's weather</h3>

          <div className='line'>
            <div className='box'>
                
                <p>Humidity </p>
                <WiHumidity className='icon-1'/>
                <div className='line-1'>
                    <h3>82% bad</h3>
                </div>
                
                



            </div>
            <div className='box'>
                
                <p>Wind </p>
                <BsWind className='icon-1'/>
                <div>
                    <h3>8 Km/h</h3>
                </div>
                
                



            </div>
            <div className='box'>
                
                <p>percipitation </p>
                <BsCloudRain className='icon-1'/>
                <div>
                    <h3>1.4 cm</h3>
                </div>
                
                



            </div>
            <div className='box'>
                
                <p>UV index </p>
                <FiSun className='icon-1'/>
                <div>
                    <h3>4 medium</h3>
                </div>
                
                



            </div>
            <div className='box'>
                
                <p>Feels Like </p>
                <TbTemperature className='icon-1'/>
                <div>
                    <h3>30°</h3>
                </div>
                
                



            </div>
            <div className='box'>
                
                <p> Chance of rain </p>
                <GiRaining className='icon-1'/>
                <div>
                    <h3>42%</h3>
                </div>
                
                



            </div>
          </div>




        </div>
    )
}

export default Right