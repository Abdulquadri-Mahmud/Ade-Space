import React from 'react'

import Image from 'next/image';

import { IoSearchSharp } from 'react-icons/io5';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";

export default function Herocard() {
  return (
    <>
        <div className="hero-box flex flex-wrap justify-center gap-[1rem] md:max-w-[90%] my-6 mx-auto text-black text-center">
            <div className="flex flex-col justify-center gap-3">
                <Image src={''}  alt=''/>
                <h2 className='font-semibold text-xl'>Restaurant</h2>
                <p className='text-slate-500'>150 listings</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Image src={''}  alt=''/>
                <h2 className='font-semibold text-xl'>destination</h2>
                <p className='text-slate-500'>214 listings</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Image src={''}  alt=''/>
                <h2 className='font-semibold text-xl'>Hotels</h2>
                <p className='text-slate-500'>185 listings</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Image src={''}  alt=''/>
                <h2 className='font-semibold text-xl'>Healthcare</h2>
                <p className='text-slate-500'>210 listings</p>
            </div>
            <div className="flex flex-col justify-center gap-3">
                <Image src={''}  alt=''/>
                <h2 className='font-semibold text-xl'>Automotion</h2>
                <p className='text-slate-500'>100 listings</p>
            </div>
        </div>
    </>
  )
}
