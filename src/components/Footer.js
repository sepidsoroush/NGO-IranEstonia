import React from 'react';
import Media from "./SocialMedia";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-persian-indigo-50  bg-opacity-50 text-persian-indigo-900 text-sm  w-screen py-6'>
        <div className='flex flex-col md:flex-row  md:justify-around justify-start items-center mx-auto  md:max-w-2xl lg:max-w-3xl px-10'>
        <div className='w-72 sm:w-64 md:w-56'>
            <ul>
                <li className='mb-2'>
                    <Link to="/">Home Page</Link>
                </li>
                <li className='my-2'>
                    <Link to="/events">Our Events</Link>
                </li>
                <li className='my-2'>
                    <Link to="/donate">Make a Donation</Link>
                </li>
                <li className='my-2'>
                    <Link to="/membership">Become a member</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
        <div className='w-72 sm:w-64 md:w-56  md:my-0 my-5'>
            <p className='text-base font-bold mb-2' >Contact us</p>
            <div >
                <Media />
            </div>
        </div>
        <div className='mt-4 w-72 sm:w-64 md:w-56'>
            <p className='text-base font-bold' >Newsletter</p>
            <p className='text-xs text-justify my-2 w-full'>Sign up to our Newsletter, to recieve updates on the latest news and upcoming events. We respect your privacy, Your Information is safe with us.</p>
            <form action="" className='flex flex-row justify-between w-full'>
                <input type="email" placeholder='Email Address' className=' pl-2 py-1 text-gray-500 mr-2 rounded' />
                <input type="submit" className='bg-persian-indigo-700 px-2 py-1 rounded text-white'  />
            </form>
        </div>
        
        </div>
    </div>
  )
};

export default Footer;