import Link from 'next/link'
import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='py-[2rem] md:px-[2rem] px-[1rem] bg-slate-50' id='contact'>
        <div className="flex items-center justify-between flex-wrap py-10 border-b-2 border-red-200">
            <div className="logo">
                <h1 className='text-3xl md:text-4xl font-bold text-slate-700'>Ade-<span className='text-red-500'>Space</span></h1>
            </div>
            <div className="pt-3 md:pt-0">
                <Link className='text-slate-500 hover:text-red-500 duration-200 pl-0' href={'#home'}>Home</Link>
                <Link className='text-slate-500 hover:text-red-500 duration-200' href={'#howitwork'}>How It Works</Link>
                <Link className='text-slate-500 hover:text-red-500 duration-200' href={'#explore'}>Explore</Link>
                <Link className='text-slate-500 hover:text-red-500 duration-200' href={'#reviews'}>Reviews</Link>
                <Link className='text-slate-500 hover:text-red-500 duration-200' href={'#blogs'}>Blog</Link>
                <Link className='text-slate-500 hover:text-red-500 duration-200' href={'#contact'}>Contact</Link>
            </div>
        </div>
        <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center">
                <div className="p-2">
                    <Link className='text-slate-500 hover:text-red-500 duration-200' href='tel:07047594667'>070-4759-4667</Link>
                </div>
                <div className="flex items-center gap-3 pt-3">
                    <div className="p-2 bg-slate-200 rounded-full">
                        <FaFacebookF  className='text-slate-500 hover:text-red-500 duration-200'/>
                    </div>
                    <div className="p-2 bg-slate-200 rounded-full">
                        <FaTwitter  className='text-slate-500 hover:text-red-500 duration-200'/>
                    </div>
                    <div className="p-2 bg-slate-200 rounded-full">
                        <FaInstagram  className='text-slate-500 hover:text-red-500 duration-200'/>
                    </div>
                    <div className="p-2 bg-slate-200 rounded-full">
                        <FaWhatsapp  className='text-slate-500 hover:text-red-500 duration-200'/>
                    </div>
                </div>
            </div>
            <div className="md:pt-10 pt-5">
                <div className="text-slate-500 text-sm text-center md:text-start">&copy;Copyright. Designed And Developed By AdeyemiCodes</div>
            </div>
        </div>
    </footer>
  )
}
