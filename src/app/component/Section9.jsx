"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Section9.css';



// import required modules
import { Scrollbar } from 'swiper/modules';

export default function App() {
  return (
    <div className='container mx-auto lg:h-[100vh] '>
      <div className='lg:flex w-[100%] max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-7xl xl:max-w-[1400px] mx-auto'>
        <div className='lg:w-[20%] lg:flex lg:justify-center lg:items-end mb-[50px] '>
          <h2 className='text-[24px] tracking-wider uppercase lg:text-[40px]'>insights</h2>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              scrollbar: { dragSize: 50 }

            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            2300: {
              slidesPerView: 3,
            }
          }}

          slidesPerView={2}

          spaceBetween={2}

          scrollbar={{
            hide: false,
            draggable: true,
            dragSize: 80,
          }}
          modules={[Scrollbar]}
          className="mySwiper next-bar"

        >

          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] border-[1px] rounded-[20px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>Sustainable Pump Motors Are a Must for a Greener and Financially Responsible Future</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] border-[1px] rounded-[20px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>What can the indian 3-wheeler Market Teach Us About the Industry?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px]  p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>Reliability and Safety Must Beat Costs Savings in the UAV Sector</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>"Screwing up math irritates me. Bad engineering not really." An interview with an Engineer.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>in UAVs Reliability is Key</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>eDTS: Overview</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>epropelled-unveils-energy-efficient-electric-pump-motors-for-pool-spa-and-industrial-applications</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>Gritty or Nice? Grit Daily interview With Our CEO, Nick Grewal</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>Employee Engagement isn't One Size Fits All.An Interview with a Leader.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className='w-[314px] h-[260px]  lg:w-[336px] lg:h-[450px] rounded-[20px] border-[1px] p-[30px] flex justify-between flex-col cursor-pointer'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='text-[16px]'>NOV-9'23</h3>
                </div>
                <div>
                  <img className='w-[40px] h-[40px]' src="./image/123.svg" alt="" />
                </div>
              </div>
              <div>
                <p className='text-[16px] leading-6 font-medium'>What is a Hybrid UAV and How Does it Work/</p>
              </div>
            </div>
          </SwiperSlide>



        </Swiper>
      </div>
    </div>
  );
}
