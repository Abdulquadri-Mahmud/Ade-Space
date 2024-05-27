import React from 'react'

export default function Contact() {
  return (
    <section className='pb-[6rem]'>
        <h1 className='md:text-2xl text-xl'>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h1>
        <p className='md:text-1xl text-sm'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
        <div className="lg:max-w-[50%] md:max-w-[60%] w-[100%] mx-auto mt-8">
            <form action="" className='flex justify-center hover:shadow-xl'>
                <input type="email" placeholder='Enter your email here' className='p-2 outline-none border-0 placeholder:text-slate-500 text-slate-580 bg-slate-100 shadow-lg hover:shadow-xl w-[70%]'/>
                <button className='md:p-4 p-2 text-sm text-1xl bg-red-500 font-medium text-slate-50 w-[30%]'>Create Account</button>
            </form>
        </div>
    </section>
  )
}
