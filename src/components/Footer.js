import React from 'react';
import Media from "./SocialMedia";
import { Outlet, Link } from "react-router-dom";

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
                    <Link to="/membership">Become a member</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
        <div>
            <h2>Contact us</h2>
            <Media />
            <div>
                <h1>Newsletter</h1>
                <p>Sign up to our Newsletter, to recieve updates on the latest news and upcoming events. We respect ypur privacy, Your Information is safe with us.</p>
                <form action="">
                    <input type="email" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    </div>
  )
};

export default Footer;