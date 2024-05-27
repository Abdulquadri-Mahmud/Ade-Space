import Image from 'next/image'
import React from 'react';

import img1 from '../../public/explore/e1.jpg';
import img2 from '../../public/explore/e2.jpg';
import img3 from '../../public/explore/e3.jpg';
import img4 from '../../public/explore/e4.jpg';
import img5 from '../../public/explore/e5.jpg';
import img6 from '../../public/explore/e6.jpg';

import client1 from '../../public/clients/c1.png';
import client2 from '../../public/clients/c2.png';
import client3 from '../../public/clients/c3.png';

import { FcLike } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Explore() {
  return (
    <section id='explore'>
        <h1 className='text-black'>Explore</h1>
        <p>Explore New place, food, culture around the world and many more</p>
        <div className="card-cont flex justify-center items-center mx-auto gap-5 flex-wrap mt-10">
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img1} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 text-sm bg-blue-500 rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client1} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img2} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 bg-blue-500 text-sm rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client2} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img3} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 bg-blue-500 text-sm rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client3} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img4} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 bg-blue-500 text-sm rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client3} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img5} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 bg-blue-500 text-sm rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client3} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
            <div className="explore-card w-[350px] shadow-lg">
                <div className="card-img">
                    <Image src={img6} alt=''/>
                </div>
                <div className="card-content py-2 px-2">
                    <h2 className='text-xl font-medium'>Tommy Helfinger Bar</h2>
                    <div className="flex gap-2 items-center py-2">
                        <div className="p-1 text-slate-50 bg-blue-500 text-sm rounded-sm">5.0</div>
                        <div className="text-sm">10 Ratings</div> | 
                        <div className="text-sm">form 5$-300$</div> |
                        <div className="Restaurant"></div>
                    </div>
                    <div className="card-profile mt-2">
                        <Image src={client3} alt='' width={50} height={50} borderRadius={50} className='shadow-sm'/>
                        <p className='text-sm font-normal text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae temporibus architecto pariatur recusandae animi facere suscipit....</p>
                    </div>
                    <hr className='text-slate-700  mt-1'/>
                    <p className='text-red-500 text-start text-sm font-thin'>Close Now</p>
                    <div className="flex gap-3 items-center pt-2">
                        <CiLocationOn/>
                        <MdOutlineFileDownload/>
                        <FcLike/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
