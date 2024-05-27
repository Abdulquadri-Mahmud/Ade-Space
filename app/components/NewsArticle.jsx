import Image from 'next/image'
import React from 'react';

import img1 from '../../public/blog/b1.jpg';
import img2 from '../../public/blog/b2.jpg';
import img3 from '../../public/blog/b3.jpg';

export default function NewsArticle() {
  return (
    <section id='blogs'>
        <h1>NEWS AND ARTICLES</h1>
        <p>Always upto date with our latest News and Articles</p>
        <div className="py-[2rem] flex justify-center items-center gap-7 flex-wrap">
            <div className="news-card w-[350px] shadow-lg rounded-md">
                <div className="card-img">
                    <Image src={img1} alt='blog' borderRadius={10}/>
                </div>
                <div className="card-content py-3 px-2 bg-slate-50">
                    <h2>How to find your Desire Place more quickly</h2>
                    <p className='text-black text-sm font-medium text-start'><span className="text-slate-600 font-thin">Posted by </span>ADMIN | <span className="text-slate-600">March 2024</span></p>
                    <p className='text-start font-thin text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit aperiam ipsum, id a labore natus reprehenderit sed reiciendis nostrum iste maiores optio magni voluptatibus quibusdam quos iure veniam excepturi!</p>
                </div>
            </div>
            <div className="news-card w-[350px] shadow-lg rounded-md">
                <div className="card-img">
                    <Image src={img2} alt='blog' borderRadius={10}/>
                </div>
                <div className="card-content py-3 px-2 bg-slate-50">
                    <h2>How to find your Desire Place more quickly</h2>
                    <p className='text-black text-sm font-medium text-start'><span className="text-slate-600 font-thin">Posted by </span>ADMIN | <span className="text-slate-600">March 2024</span></p>
                    <p className='text-start font-thin text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit aperiam ipsum, id a labore natus reprehenderit sed reiciendis nostrum iste maiores optio magni voluptatibus quibusdam quos iure veniam excepturi!</p>
                </div>
            </div>
            <div className="news-card w-[350px] shadow-lg rounded-md">
                <div className="card-img">
                    <Image src={img3} alt='blog' borderRadius={10}/>
                </div>
                <div className="card-content py-3 px-2 bg-slate-50">
                    <h2>How to find your Desire Place more quickly</h2>
                    <p className='text-black text-sm font-medium text-start'><span className="text-slate-600 font-thin">Posted by </span>ADMIN | <span className="text-slate-600">March 2024</span></p>
                    <p className='text-start font-thin text-sm text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit aperiam ipsum, id a labore natus reprehenderit sed reiciendis nostrum iste maiores optio magni voluptatibus quibusdam quos iure veniam excepturi!</p>
                </div>
            </div>
        </div>
    </section>
  )
}
