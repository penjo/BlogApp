import React from 'react'
import { useState } from 'react';
const Header = () => {
  const [SearchTerm,setSearchTerm]=useState("")

  const handleInputChange =(e)=>{
    setSearchTerm(e.target.value);
  }
  const clearValue =()=>{
    setSearchTerm("");
  }
  return (
    <nav className="bg-white shadow border-b border-solid">
      <div className=" flex items-center justify-between px-4 py-2 " >
        {/* Phần logo */}
        <div className="text-2xl text-purple-500 flex items-center gap-2 px-4 font-bold uppercase">
          <p>Bean Blog</p>
        </div>

        {/* Phần ô tìm kiếm */}
        <form className="w-[540px] relative">
          <div className="flex items-center border-2 border-black rounded-full p-1 w-full">
            <span className="mr-2 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <span className="flex-grow">
              <input 
                type="text" 
                className="flex items-center w-full border-none outline-none py-1 pl-2 pr-2" 
                placeholder="Tìm kiếm..." 
                value={SearchTerm}
                onChange={handleInputChange}
              />
            </span>
            
            <span className='"flex-grow mr-2 flex items-center"'>
            {SearchTerm && (
              <button className='"flex items-center justify-center p-0.5 rounded-full hover:bg-gray-400 transition-colors duration-300 focus:outline-none">'
              onClick={clearValue}
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#000000" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                </button>
            )}
            </span>
          </div>
        </form>

        {/* Phần menu/nút */}
        <div className="flex items-center space-x-4">
          <button className="text-black">Đăng nhập</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;