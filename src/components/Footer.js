import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div>
        <div>
            <h2>Iranian supportive organization</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.</p>
        </div>
        <div>
            <h2>Main Menu</h2>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
        <div>
            <h2>Contact us</h2>
            <ul>
                <li>
                    <a href="https://www.facebook.com/freeirangroup"><UilFacebookF /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/freeirangroup/"><UilInstagram/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/freeirangroup/"><UilTwitter/></a>
                </li>
            </ul>
        </div>
    </div>
  )
};

export default Footer;