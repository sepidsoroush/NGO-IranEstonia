import { Outlet, Link } from "react-router-dom";
import Logo from "../data/Images/Logo.jpg";
import { UilBars , UilMultiply , UilAngleDown } from '@iconscout/react-unicons';
import { useState, useRef } from "react";

const links = [
  {id : 1, url : '/', text : 'Home'},
  {id : 2,url :'/events', text : 'Events' ,submenu : [
    {text : 'Events' , url:'/events'},
    {text : 'Activities' , url : '/activities'},
    {text : 'News' , url : '/news'}]},
  {id : 3, url : '/about', text : 'About'},
  {id : 4, url : '/membership', text : 'Membership'},
  {id : 5, url : '/contact', text : 'Contact'},
  {id : 6 , url : '/donate' , text : 'Donation'}
];

// JSX for styles
const navbar ='fixed top-0 z-50 w-screen h-28 box-border text-gray-600 bg-white shadow-lg';
const navbarStyle = 'md:max-w-6xl md:my-0 md:mx-auto md:flex md:items-center md: justify-between md:p-4';
const navbarHeader ='md:p-0 flex items-center justify-between p-4 ';
const logoStyle ='h-20 w-10';
const titleStyle ='text-sm font-semibold text-persian-indigo-700 pl-4 w-28 text-justify';
const logoContainer ='flex items-center justify-center'
const buttonStyle ='md:hidden';
const linksContainer ='md:!h-auto  h-0 overflow-hidden transition transition-all duration-300 ease-linear bg-white md:shadow-none  shadow-md';
const ulLinks = 'md:flex cursor-pointer';
const liLinks = ' md:py-2 md:px-1 lg:px-1 xl:px-2 py-2  md:border-b-4 md:border-transparent md:hover:border-b-4 md:hover:border-persian-indigo-700 active:text-persian-indigo-700 transition transition-all duration-300 ease-linear';

const Navbar = () => {
  const [showLinks , setShowLinks] =useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () =>{
    setShowLinks(!showLinks);
  };
  const linkStyle = { height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px' , marginBottom : '5px' , paddingLeft : '10px'};

  return (
    <nav className={navbar}>
        <div className={navbarStyle}>
          <div className={navbarHeader}>
            <a href="/" className={logoContainer}>
              <img src={Logo} alt="Logo" className={logoStyle}/>
              <span className={titleStyle}>Iranian supportive organization</span>
            </a>
            <button onClick={toggleLinks} className={buttonStyle}>
              {showLinks? <UilMultiply /> : <UilBars />}
            </button>
          </div>
          <div className={linksContainer} style={linkStyle} ref={linksContainerRef}>
            <ul className={ulLinks} ref={linksRef}>
              {links.map((link)=>{
                const {id,url,text} =link;
                return(
                  <li key={id} className={liLinks}>
                    <Link to={url} onClick={toggleLinks}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      <Outlet />
    </nav>
  )
};

export default Navbar;
