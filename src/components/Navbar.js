import { Outlet, Link } from "react-router-dom";
import Logo from "../data/Images/Logo.jpg";
import { UilBars , UilMultiply , UilAngleDown } from '@iconscout/react-unicons';
import { useState, useRef } from "react";

const links = [
  {id : 1, url : '/', text : 'Home'},
  {id : 2, text : 'Actions' ,submenu : [
    {text : 'Events' , url:'/events'},
    {text : 'Activities' , url : '/activities'},
    {text : 'News' , url : '/news'}]},
  {id : 3, url : '/about', text : 'About'},
  {id : 4, url : '/membership', text : 'Membership'},
  {id : 5, url : '/contact', text : 'Contact'},
  {id : 6 , url : '/donate' , text : 'Donation'}
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [showLinks , setShowLinks] =useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const  DropDown = () =>{
    const menuItems = links[1].submenu;
    return(
      <ul className='md:absolute relative text-gray-600  md:px-3 xl:px-4 py-1 shadow-sm md:shadow-lg text-sm transition-all duration-300 ease-linear flex flex-col bg-white' style={{display : dropdown ? 'flex' : 'none' , position: dropdown? 'absolute' : 'relative' }} >
        {menuItems.map((submenu , index)=>(
          <li key={index} className='py-2'>
            <Link
            to={submenu.url}
            onClick={()=>{
              setShowLinks(!showLinks);
              setDropdown(!dropdown);}}
            >{submenu.text}</Link>
          </li>
        ))}
      </ul>
    )
}

  return (
    <nav className='fixed top-0 z-50 w-screen h-28 box-border text-gray-600 bg-white shadow-lg'>
        <div className='md:max-w-6xl md:my-0 md:mx-auto md:flex md:items-center md: justify-between md:p-4'>
          <div className='md:p-0 flex items-center justify-between p-4 '>
            <a href="/" className='flex items-center justify-center'>
              <img src={Logo} alt="Logo" className='h-20 w-10'/>
              <span className='text-sm font-semibold text-persian-indigo-700 pl-4 w-28 text-justify'>Iranian supportive organization</span>
            </a>
            <button onClick={()=>(setShowLinks(!showLinks))} className='md:hidden'>
              {showLinks? <UilMultiply /> : <UilBars />}
            </button>
          </div>
          <div className='md:!h-auto  h-0 overflow-hidden transition-all duration-300 ease-linear bg-white md:shadow-none  shadow-md' style={{ height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px' , marginBottom : '5px' , paddingLeft : '10px'}} ref={linksContainerRef}>
            <ul className='md:flex cursor-pointer' ref={linksRef}>
              {links.map((link)=>{
                const {id,url,text} =link;
                return(
                  <div>
                    {Object.hasOwn(link,'submenu')?
                      <li key={id} className=' md:py-2 md:px-1 lg:px-2 xl:px-3 py-2  md:border-b-4 md:border-transparent md:hover:border-b-4 md:hover:border-persian-indigo-700 active:text-persian-indigo-700  transition-all duration-300 ease-linear'>
                        <Link to={url} onClick={()=>(setDropdown(!dropdown))}>
                          {text}<UilAngleDown className='inline-block' />
                        </Link>
                        <DropDown className='inline' />
                      </li> :
                      <li key={id} className=' md:py-2 md:px-1 lg:px-2 xl:px-3 py-2  md:border-b-4 md:border-transparent md:hover:border-b-4 md:hover:border-persian-indigo-700 active:text-persian-indigo-700  transition-all duration-300 ease-linear'>
                        <Link to={url} onClick={()=>(setShowLinks(!showLinks))}>
                          {text}
                        </Link>
                      </li>
                    }
                  </div>
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
