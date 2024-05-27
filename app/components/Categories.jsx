import React from 'react';
import img from './hero2.jpg'

export default function Categories() {
  return (
    <section className='h-[70vh] w-full bg-slate-700 flex justify-center items-center' style={{backgroundImage: `url(${img.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundAttachment: 'fixed'}}>
        <div className="flex justify-center items-center flex-col md:flex-row md:gap-10">
            <div className="my-3 md:p-4 rounded-md md:bg-white/20">
                <h1 className='text-center pt-3 text-slate-50 text-3xl md:text-5xl'>90k +</h1>
                <p className='text-slate-50 py-2'>Listings</p>
            </div>
            <div className="my-3 md:p-4 rounded-md md:bg-white/20">
                <h1 className='text-center text-slate-50 text-3xl md:text-5xl'>40k +</h1>
                <p className='text-slate-50 py-2'>Listing Categories</p>
            </div>
            <div className="my-3 md:p-4 rounded-md md:bg-white/20">
                <h1 className='text-center text-slate-50 text-3xl md:text-5xl'>65k +</h1>
                <p className='text-slate-50 py-2'>Visitors</p>
            </div>
            <div className="my-3 md:p-4 rounded-md md:bg-white/20">
                <h1 className='text-center text-slate-50 text-3xl md:text-5xl'>50k +</h1>
                <p className='text-slate-50 py-2'>Happy Clients</p>
            </div>
        </div>
    </section>
  )
}
