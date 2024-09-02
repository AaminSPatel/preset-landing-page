// src/Header.js
import React, { useState } from 'react';
import { FaBars, FaSearch, FaSun, FaMoon, FaTimes, FaInstagram, FaSnapchat, FaYoutube } from 'react-icons/fa'; // Icons for the header
import { IoMdArrowDropdown } from 'react-icons/io'; // Icon for dropdown
import { BsFillPersonFill } from 'react-icons/bs'; // Example icon for profile
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchedQuery,setSearchedQuery] = useState('')
  function hangleChange(e){
    let query = e.target.value;
   // console.log(query);
    setSearchedQuery(query);
    if(!searchedQuery){
        navigate(`/gallery/*`);
    }
    else{
       let tiemout = setTimeout(()=>{
        navigate(`/gallery/${searchedQuery}`);
    },1000)
    return()=>{
        clearTimeout(tiemout)
    } 
    }
    
  }
  // Toggle for theme mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark'); // Toggle dark mode on the root
  };
const navigate = useNavigate()
  const linkCls= ` hover:bg-gradient-to-r from-purple-600 to-pink-600 px-2 rounded`;
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800  text-white p-4 shadow-md dark:bg-slate-900">
      <div className="containe w-full md:px-8 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4 cursor-pointer"  onClick={()=>{navigate('/')}}>
          <div className="text-2xl p-0.5 rounded-md font-bold bg-slate-300 from-purple-600 to-pink-600"> {/* Placeholder for logo */}
            <img src="/bg1.jpg" alt="logo" className='h-8 w-8 rounded-md scale-105 hover:scale-110' />
          </div>
          <h1 className="text-xl font-semibold text-orange-400">Shakil Khan</h1>
        </div>

        {/* Search Bar */}
        <div className='flex items-center justify-center gap-2 '>
        <div className="hidden md:flex items-center bg-gray-200 rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e)=>{hangleChange(e)}}
            className="bg-transparent outline-none text-black placeholder-gray-400"
          /> 
          <FaSearch className="text-gray-800 mr-2 cursor-pointer" onClick={()=>{navigate(`/gallery/${searchedQuery}`)}}/>

        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 transition-colors"
        >
          {isDarkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-400" />}
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden p-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600   transition-colors"
        >
          
          {isMenuOpen ? <FaTimes/>: <FaBars /> }
        </button>
      </div>
        </div>
        

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
      >
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex  items-center bg-gray-200 rounded-md px-2 py-1`}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e)=>{hangleChange(e)}}
            className="bg-transparent outline-none w-full text-black placeholder-gray-400"
          />  
          <FaSearch className="text-gray-900 mr-2 cursor-pointer" onClick={()=>{navigate(`/gallery/${searchedQuery}`)}}/>

        </div>
        <div>
            <button className={linkCls} onClick={()=>{navigate('/')}}>
             Home 
            </button>
        </div>
        <div>
            <button className={linkCls}  onClick={()=>{navigate('/gallery/*')}}>
            Lightroom Presets  
            </button>
        </div>
        
       {/*  Event links */}
        <div
          className="relative group"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button className="flex items-center space-x-1  hover:bg-gradient-to-r from-purple-600 to-pink-600 px-2 rounded">
            <span>Events</span>
            <IoMdArrowDropdown />
          </button>
          {/* Dropdown Menu */}
      
            <ul className="absolute  hidden group-hover:block left-0 overflow-hidden w-40 bg-white text-black rounded-md shadow-lg z-20 transition-all">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/couples')}}>Couples</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/velentine')}}>Velentine Day</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/15august')}}>15th August</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/eid')}}>Eid</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/diwali')}}>Diwali</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/travel')}}>Travel</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/dark')}}>Dark</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-all" onClick={()=>{navigate('/gallery/aesthetic')}}>Aesthetic</li>
            </ul>
          
        </div>
        {/* Filter Links  */}
        <div className="relative group">
          <button className="flex items-center space-x-1 hover:bg-gradient-to-r from-purple-600 to-pink-600 px-2 rounded">
            <span>Filters</span>
            <IoMdArrowDropdown />
          </button>
          {/* Dropdown Menu */}
          <ul className="absolute left-0  w-40 bg-white text-black rounded-md shadow-lg z-20 hidden group-hover:block overflow-hidden">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1" onClick={()=>{navigate('/gallery/instagram filter')}}><FaInstagram/> Instagram</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  flex items-center gap-1" onClick={()=>{navigate('/gallery/snapchat filter')}}><FaSnapchat/> Snapchat</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1" onClick={()=>{navigate('/gallery/youtubefilter')}}><FaYoutube/> Youtube</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
