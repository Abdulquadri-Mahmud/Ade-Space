import React from 'react';
import heroImg from './hero.jpeg';
import { IoSearchSharp } from 'react-icons/io5';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

// import icon1 from '../../public/fonts/'


export default function Hero() {
  return (
    <div className="hero h-[90vh] w-[full]" style={{ backgroundImage: `url(${heroImg.src})`}}>
        <div className="hero-cont">
            <div className="hero-text">
                <h2>BEST PLACE TO FIND AND EXPLORE <br /> ALL YOU NEED</h2>
                <p className='text-center'>Find Best Place, Hotel and Real Estate in just One click</p>
            </div>
            <div className="hero-form">
                <form>
                    <div className='pr-5 relative'>
                        <label className='font-semibold' htmlFor="restaurant">What?</label>
                        <input type="text" placeholder='Ex: Palce, Restaurant, Food'/>
                        <div className="rest-icon absolute right-10">
                            <TfiMenuAlt className='text-xl text-red-500'/>
                        </div>
                    </div>
                    <div className='border-l-2 border-l-gray-300 pl-3 relative'>
                        <label className='font-semibold' htmlFor="location">Location</label>
                        <input type="text" placeholder='Ex: London, Newyork, Roman'/>
                        <div className="locate-icon absolute right-5">
                            <FaLocationCrosshairs className='text-xl text-red-500'/>
                        </div>
                    </div>
                    <div className="button">
                        <button className='font-semibold flex items-center justify-center text-white outline-none py-1 px-12 border-0'>Seach <IoSearchSharp className='font-semibold text-xl text-center'/></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
