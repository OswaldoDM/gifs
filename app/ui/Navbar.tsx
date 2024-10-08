"use client";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const onMenuOpen = () => setOpen(!open);

  return (
    <>
      <div className='container mx-auto px-8 md:px-12 '>
        <div className='flex justify-between items-center'>
          <a
            href='#'
            className='font-[family-name:var(--font-blanka)] text-[40px]'
          >
            ODM
          </a>

          <a
            href='https://developers.giphy.com/'
            target='_blank'
            className='inline'
          >
            <button
            type='submit'
            className={`py-3 px-6 mt-4 
            text-white text-lg font-bold 
            rounded-[5px] items-center 
            btn hidden md:inline-flex`}>            
              GiphyDevelopers
            </button>
          </a>

          {/* Mobile NavBar Icon */}
          <div
            onClick={onMenuOpen}
            className={`md:hidden w-[22px] h-[30px]
            flex flex-col items-center justify-center
            gap-[7px] cursor-pointer mt-3
            ${open && "gap-0"}`}
          >
            <span
              className={`bg-black w-full h-[2px]
                transition duration-200
                ${open && "rotate-45"}`}
            ></span>
            <span
              className={`bg-black w-full h-[2px]
                transition duration-200
                ${open && "rotate-[-45deg] relative bottom-[8px]"}`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open ? (
        <div className='absolute lg:hidden bg-[#ecf8ff] w-full z-10'>
          <nav
            className={`relative lg:hidden
                container mx-auto 
                flex flex-col 
                text-base 
                transition-all duration-300 ease-in-out
                my-1 py-4 px-5 rounded-md 
                text-[#09141dce] bg-white    
                `}
          >
            <a href='#' className='cursor-pointer'>
              Contact
            </a>

            <a
              href='https://developers.giphy.com/'
              target='_blank'
              className='flex justify-center'
            >
              <button
                type='submit'
                className={`py-3 px-6 mt-4 
                text-white text-lg font-bold 
                rounded-[5px] items-center btn w-full`}>              
                GiphyDevelopers
              </button>
            </a>
          </nav>
        </div>
      ) : (
        <div className='absolute'>
          <nav></nav>
        </div>
      )}
    </>
  );
}
export default Navbar;
