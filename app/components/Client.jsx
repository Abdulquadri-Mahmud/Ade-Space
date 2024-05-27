'use client';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import cl1 from '../../public/clients/c1.png';
import cl2 from '../../public/clients/c2.png';
import cl3 from '../../public/clients/c3.png';
import cl4 from '../../public/clients/c4.png';

export default function Client() {
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          autoplay: true,
          speed: 2500,
          autoplaySpeed: 2000,
        }
      },
    ]
  };

  return (
    <section className='bg-slate-50' id='reviews'>
        <h1>CLIENTS REVIEWS</h1>
        <p>What our client say about us</p>
        <div className="mt-10 md:max-w-[50%]  max-w-[100%] mx-auto relative z-10">
          <Slider {...settings} className='overflow-hidden'>
            <div className="shadow-md">
              <div className="slides bg-red-500 py-10 m-2 rounded-md p-6 text-slate-50">
                <div className="img flex gap-2">
                  <div>
                    <Image src={cl1} alt="client1" width={50} height={50} borderRadius={50}/>
                  </div>
                  <div className="">
                    <h2>Tom Leaker</h2>
                    <p className='text-start text-slate-50 p-0 font-thin text-sm'>London UK</p>
                  </div>
                </div>
                <div className="">
                  <p className='text-start text-slate-50 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!</p>
                </div>
              </div>
            </div>
            <div className="shadow-md">
              <div className="slides bg-red-500 py-10 m-2 rounded-md p-6 text-slate-50">
                <div className="img flex gap-2">
                  <div className="">
                    <Image src={cl2} alt="client1" width={50} height={50} borderRadius={50}/>
                  </div>
                  <div className="">
                    <h2>Tom Leaker</h2>
                    <p className='text-start text-slate-50 p-0 font-thin text-sm'>London UK</p>
                  </div>
                </div>
                <div className="">
                  <p className='text-start text-slate-50 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!</p>
                </div>
              </div>
            </div>
            <div className="shadow-md">
              <div className="slides bg-red-500 py-10 m-2 rounded-md p-6 text-slate-50">
                <div className="img flex gap-2">
                  <div className="">
                    <Image src={cl3} alt="client1" width={50} height={50} borderRadius={50}/>
                  </div>
                  <div className="">
                    <h2>Tom Leaker</h2>
                    <p className='text-start text-slate-50 p-0 font-thin text-sm'>London UK</p>
                  </div>
                </div>
                <div className="">
                  <p className='text-start text-slate-50 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!</p>
                </div>
              </div>
            </div>
            <div className="shadow-md">
              <div className="slides bg-red-500 py-10 m-2 rounded-md p-6 text-slate-50">
                <div className="img flex gap-2">
                  <div className="">
                    <Image src={cl4} alt="client1" width={50} height={50} borderRadius={50}/>
                  </div>
                  <div className="">
                    <h2>Tom Leaker</h2>
                    <p className='text-start text-slate-50 p-0 font-thin text-sm'>London UK</p>
                  </div>
                </div>
                <div className="">
                  <p className='text-start text-slate-50 font-thin text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!</p>
                </div>
              </div>
            </div>
          </Slider>
          <div className="w-[200px] h-[200px] bg-slate-200 shadow-lg absolute -bottom-16 -right-20 -z-10 radius"></div>
        </div>
    </section>
  )
}
