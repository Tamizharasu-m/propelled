"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Section.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import Header from './Header';



 


export default function Section() {



   
  return (
    <div className='container relative mx-auto'>
      <div className='h-[100vh] w-[100%] max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-7xl xl:max-w-[1600px] mx-auto'>
      <div className="absolute top-0 z-50 w-full">
        <Header/>
      </div>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            type: 'fraction'
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div>
              <div className='flex justify-center pt-[40px]'>
                <img className='w-[257.6px] h-[390.712px] object-contain lg:w-[370px] md:h-[480px] xl:w-[407.75px] xl:h-[437.35px]' src="./image/home-slider1.webp" alt="" />
              </div>
              <div className='relative flex items-center justify-between top-[100px] border-t-[0.5px] border-zinc-800'>
                <div className='pt-[15px]'>
                  <h2 className='text-[24px] font-normal lg:text-[40px]'>AERIAL VEHICLE SERIES</h2>
                  <div className='flex items-center product-btn'>
                    <img className='w-[33px] h-[33px]' src="./image/ePropelled-2.svg" alt="" />
                    <span>View products</span>
                  </div>
                </div>
                <div className='pt-[15px] relative bottom-[120px] md:bottom-[0px]'>
                  <img className='w-[88px] h-[50px] rounded-[10px] md:w-[200px] md:h-[115px]' src="./image/AERIAL-VEHICLE-SERIES.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex justify-center pt-[40px]'>
                <img className='w-[257.6px] h-[390.712px] object-contain lg:w-[370px] md:h-[480px] xl:w-[407.75px] xl:h-[437.35px]' src="./image/LIGHT-ELECTRIC-VEHICLE-2.webp" alt="" />
              </div>
              <div className='relative flex items-center justify-between top-[100px] border-t-[0.5px] border-zinc-800'>
                <div className='pt-[15px]'>
                  <h2 className='text-[24px] font-normal lg:text-[40px]'>LIGHT ELECTRIC VEHICLE</h2>
                  <div className='flex items-center product-btn'>
                    <img className='w-[33px] h-[33px]' src="./image/ePropelled-2.svg" alt="" />
                    <span>View products</span>
                  </div>
                </div>
                <div className='pt-[15px]  relative bottom-[120px] md:bottom-[0px]'>
                  <img className='w-[88px] h-[50px] rounded-[10px] md:w-[200px] md:h-[115px]' src="./image/LIGHT-ELECTRIC-VEHICLE-min.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex justify-center pt-[40px]'>
                <img className='w-[257.6px] h-[390.712px] object-contain lg:w-[370px] md:h-[480px] xl:w-[407.75px] xl:h-[437.35px]' src="./image/SUSTAINABILITY-SYSTEM-S-04.webp" alt="" />
              </div>
              <div className='relative flex items-center justify-between top-[100px] border-t-[0.5px] border-zinc-800'>
                <div className='pt-[15px]'>
                  <h2 className='text-[24px] font-normal lg:text-[40px]'>SUSTAINABILITY SYSTEM</h2>
                  <div className='flex items-center product-btn'>
                    <img className='w-[33px] h-[33px]' src="./image/ePropelled-2.svg" alt="" />
                    <span>View products</span>
                  </div>
                </div>
                <div className='pt-[15px]  relative bottom-[120px] md:bottom-[0px]'>
                  <img className='w-[88px] h-[50px] rounded-[10px] md:w-[200px] md:h-[115px]' src="./image/Sustainability-System-min.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex justify-center pt-[40px]'>
                <img className='w-[257.6px] h-[390.712px] object-contain lg:w-[370px] md:h-[480px] xl:w-[407.75px] xl:h-[437.35px]' src="./image/ELECTRICAL-VEHICLE-S04.webp" alt="" />
              </div>
              <div className='relative flex items-center justify-between top-[100px] border-t-[0.5px] border-zinc-800'>
                <div className='pt-[15px]'>
                  <h2 className='text-[24px] font-normal lg:text-[40px]'>ELECTRICAL VEHICLE</h2>
                  <div className='flex items-center product-btn'>
                    <img className='w-[33px] h-[33px]' src="./image/ePropelled-2.svg" alt="" />
                    <span>View products</span>
                  </div>
                </div>
                <div className='pt-[15px] relative bottom-[120px] md:bottom-[0px]'>
                  <img className='w-[88px] h-[50px] rounded-[10px] md:w-[200px] md:h-[115px]' src="./image/Electric-Vehicle-min-1.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex justify-center pt-[40px]'>
                <img className='w-[257.6px] h-[390.712px] object-contain lg:w-[370px] md:h-[480px] xl:w-[407.75px] xl:h-[437.35px]' src="./image/MARINE.webp" alt="" />
              </div>
              <div className='relative flex items-center justify-between top-[100px] border-t-[0.5px] border-zinc-800'>
                <div className='pt-[15px]'>
                  <h2 className='text-[24px] font-normal lg:text-[40px]'>MARINE</h2>
                  <div className='flex items-center product-btn'>
                    <img className='w-[33px] h-[33px]' src="./image/ePropelled-2.svg" alt="" />
                    <span>View products</span>
                  </div>
                </div>
                <div className='pt-[15px] relative bottom-[120px] md:bottom-[0px]'>
                  <img className='w-[88px] h-[50px] md:w-[200px] md:h-[115px] rounded-[10px]' src="./image/01MARINE-min.webp" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        </div>
    </div>
  );
}
