"use client"

import React from 'react';
import './Section7.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Section7() {
    const fontRef = useRef(null);

    useEffect(() => {
        const text = fontRef.current;
        const letters = text.innerText.split('');
        text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
    
        gsap.fromTo(
          text.children,
          { opacity: 0.5, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      }, []);

      
    return (
        <div className='con-section1'>
            <div className='con-section1-mx-w1'>
                <div className='con-text'>
                    <h2 ref={fontRef}>Please fill out the form below, let us know how we can help, <img src='' /> and someone from our team will be in touch shortly.</h2>
                </div>
                <div className='con-div'>
                    <div className='input'>
                        <input className='con-btn' type="text" placeholder='FIRST NAME*' />
                    </div>
                    <div className='input'>
                        <input className='con-btn' type="text" placeholder='LAST NAME*' />
                    </div>
                    <div className='input'>
                        <input className='con-btn' type="phone" placeholder='PHONE' />
                    </div>
                    <div className='input'>
                        <input className='con-btn' type="email" placeholder='EMAIL' />
                    </div>
                    <div className='input'>
                        <input className='con-btn' type="text" placeholder='WHAT IS IT REGARDING' />
                    </div>
                    <div className='input'>
                        <textarea className='con-btn1' placeholder='MESSEGE' ></textarea>
                    </div>
                    <div className='input'>
                        <p>*I have read and accepted the terms of <span> privacy policy</span></p>
                    </div>
                    <div className='product-btn input'>
                        <img src="./home image/pic.svg" alt="" />
                        <span>View products</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
