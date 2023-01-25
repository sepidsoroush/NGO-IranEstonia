import React from 'react';
import Media from "./SocialMedia";
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-persian-indigo-50 text-persian-indigo-700 text-sm  w-screen'>
        <div className='flex flex-row justify-around w-3/4 mx-auto'>
        <div className=' my-6 w-32'>
            <p className='text-base font-bold mb-2' >Contact us</p>
            <div >
                <Media />
            </div>
        </div>
        <div className='my-6 w-60'>
            <p className='text-base font-bold' >Newsletter</p>
            <p className='text-xs text-justify my-2'>Sign up to our Newsletter, to recieve updates on the latest news and upcoming events. We respect your privacy, Your Information is safe with us.</p>
            <form action="">
                <input type="email" placeholder='Email Address' className=' pl-2 py-1 text-gray-500 mr-2 rounded' />
                <input type="submit" className='bg-persian-indigo-700 px-2 py-1 rounded text-white'  />
            </form>
        </div>
        <div className='my-6 w-32'>
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
        </div>
    </div>
  )
};

export default Footer;