import React from 'react';
import './Section6.css';

export default function Section6 () {
  return (
    <div className='con-section'>
        <div className='con-section-mx-w'>
            <div className='con-head'>
                <h1>OUR LOCATIONS</h1>
            </div>
            <div>
                <div className='con-df'>
                    <p>HEADQUARTERS</p>
                    <p>US</p>
                </div>
                <div className='con-df'>
                    <p>INNOVATION</p>
                    <p>UK</p>
                </div>
                <div className='con-df'>
                    <p>ENGINEERING CENTER</p>
                    <p>IN</p>
                </div>
                <div className='con-df'>
                    <p>SOLUTIONS CENTER</p>
                    <p>US</p>
                </div>
            </div>
            <div className='card-box'>
                <img src="./home image/US_Lowell.webp" alt="" />
                <h2>HEADQUARTERS</h2>
                <span>116 John Street Suite 205 Lowell,<br></br> MA 01852 USA <br></br>+1 (603) 236-7444</span>
            </div>
        </div>
    </div>
  )
}
