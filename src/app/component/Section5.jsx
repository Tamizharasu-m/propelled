"use client"

import { useEffect } from 'react';
import React from 'react';
import './Section5.css';







export default function Section5() {
    
    useEffect(() => {
        const acc = document.getElementsByClassName("accordion1");
    
        const handleAccordionClick = function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        };
    
        for (let i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", handleAccordionClick);
        }
    
        // Cleanup event listeners when component unmounts
        return () => {
          for (let i = 0; i < acc.length; i++) {
            acc[i].removeEventListener("click", handleAccordionClick);
          }
        };
      }, []);
    
    return (
        <div className='section6'>
            <div className='section6-mx-w'>
                <div className='footer-logo'>
                    <img className='img1' src="./home image/logo2.webp" alt="" />
                    <img className='img2' src="./home image/logo6.webp" alt="" />
                    <img className='img3' src="./home image/logo1.webp" alt="" />
                    <img className='img4' src="./home image/logo4.webp" alt="" />
                    <img className='img5' src="./home image/logo5.webp" alt="" />
                </div>
            </div>
            <div className='section6-mx-w1'>
                <div className='df'>
                    <div>
                        <img className='footer-img' src="./home image/footer-img1.webp" alt="" />
                    </div>
                    <div>
                        <div><h3 className='footer-h3'>LET'S</h3></div>
                        <div className='df1'>
                            <h2>CONNECT</h2>
                            <img className='footer-icon' src="./home image/footer.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section6-mx-w2'>
                <div className='footer'>
                    <div className='footer-df'>
                        <div className='footer-con' >
                            <h5 class="accordion1" >PRODUCTS</h5>
                            <div class="panel1">
                                <p>Air vehicles</p>
                                <p>Light Electric Vehicle</p>
                                <p>Sustainability System</p>
                                <p>Electric Vehicle</p>
                                <p>Marine</p>
                            </div>
                        </div>
                        <div className='footer-con' >
                            <h5 class="accordion1" >USEFUL LINKS</h5>
                            <div class="panel1">
                                <p>Company</p>
                                <p>Contact</p>
                                <p>Blog</p>
                                <p>Privacy</p>
                            </div>
                        </div>
                        <div className='footer-con' >
                            <h5 class="accordion1" >LOCATE US</h5>
                            <div class="panel1" >
                                <p>116 John Street STE 205Lowell, MA 01852</p>
                                <p>MON - FRI: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end w50'>
                        <img className='w-[160px] h-[29px]' src="./home image/logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='section6mx-w3'>
                <div className='footer-df1'>
                <div className='footer-para'>
                    <p>© 2023 ePROPELLED all rights reserved.</p>
                </div>
                <div className='img-icon1'>
                    <div><img className='footer-image1' src="./home image/in.svg" alt="" /></div>
                    <div><img className='footer-image2' src="./home image/insta.svg" alt="" /></div>
                    <div><img className='footer-image3' src="./home image/twiter.svg" alt="" /></div>
                    <div><img className='footer-image4' src="./home image/youtube.svg" alt="" /></div>
                </div>
                <div className='w501'>
                    <img src="./home image/logo.svg" alt="" />
                </div>
                <div className='footer-para1'>
                    <p>© 2023 ePROPELLED all rights reserved.</p>
                </div>
                </div>
            </div>
        </div>
    )
}
