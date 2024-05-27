'use client'

import Link from 'next/link'
import React, { useState } from 'react';

import { RiMenuFold4Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleSideMenu = () => {
        if (!open) {
            setOpen(true);
            return;
        }
        setOpen(false);
    }

  return (
    <>
        <div className="hidden lg:block w-full">
            <div className="bg-slate-800 flex justify-between items-center w-full py-1 px-6">
                <div className="text-slate-50 flex items-center">
                    <MdAttachEmail className='text-slate-50'/>
                    <Link href={'mailto:abdulquadrimahmud06@gmail.com'}>adespace06@gmail.com</Link>
                </div>
                <div className="text-slate-50">
                    <Link href='tel:07047594667'>070-4759-4667</Link> | 
                    <Link href='/register'>Register</Link> | 
                    <Link href='signin'>Sign In</Link>
                </div>
            </div>
        </div>
        <div className="sec-nav w-full sticky top-0 z-20">
            <div className="hidden md:block w-full">
                <div className="nav">
                    <div className="logo">
                        <h1 className='text-3xl md:text-4xl font-bold text-slate-700'>Ade-<span className='text-red-500'>Space</span></h1>
                    </div>
                    <nav>
                        <Link href={'#home'}>Home</Link>
                        <Link href={'#howitwork'}>How It Works</Link>
                        <Link href={'#explore'}>Explore</Link>
                        <Link href={'#reviews'}>Reviews</Link>
                        <Link href={'#blogs'}>Blog</Link>
                        <Link href={'#contact'}>Contact</Link>
                    </nav>
                </div>
            </div>
            <div className="md:hidden block w-full">
                <div className="sidemenuCont relative flex justify-between w-full">
                    <div className="logo">
                        <h1 className='text-3xl md:text-4xl font-bold text-slate-700'>Ade-<span className='text-red-500'>Space</span></h1>
                    </div>
                    <div className="menuBtn border-2 border-red-500 p-1 rounded-md cursor-pointer" onClick={handleSideMenu}>
                        <RiMenuFold4Line className='text-2xl text-red-500'/>
                    </div>
                    <div className={`sidemenu ${!open ? 'w-[0%]' : 'w-[60%]'} duration-300 fixed right-0 top-14 h-full z-10 bg-slate-50`}>
                        <div className="sidenav">
                            <Link href={'#home'}>Home</Link>
                            <Link href={'#howitwork'}>How It Works</Link>
                            <Link href={'#explore'}>Explore</Link>
                            <Link href={'#reviews'}>Reviews</Link>
                            <Link href={'#blogs'}>Blog</Link>
                            <Link href={'#contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
