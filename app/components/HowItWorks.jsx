import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";
import { LiaBinocularsSolid } from "react-icons/lia";

export default function HowItWorks() {
  return (
    <section className='py-[5rem] text-center' id='howitwork'>
        <h1 className=''>HOW IT WORKS</h1>
        <p className=''>Learn more about how our website works</p>
        <div className="card-cont pt-10">
          <div className="card">
            <div className="icon">
              <HiOutlineLightBulb className='text-4xl text-slate-700'/>
            </div>
            <h2 className='text-xl font-semibold pb-4 text-slate-700'>Choose what to do </h2>
            <p className='text-slate-600 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vel esse magnam</p>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <PiMapPinSimpleAreaFill className='text-4xl text-slate-700'/>
            </div>
            <h2 className='text-xl font-semibold pb-4 text-slate-700'>Find what you want</h2>
            <p className='text-slate-600 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vel esse magnam</p>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <LiaBinocularsSolid className='text-4xl text-slate-700'/>
            </div>
            <h2 className='text-xl font-semibold pb-4 text-slate-700'>Explore amazing place</h2>
            <p className='text-slate-600 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vel esse magnam</p>
            <div className="button">
              <button>Read More</button>
            </div>
          </div>
        </div>
    </section>
  )
}
