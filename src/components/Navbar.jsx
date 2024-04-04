import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const toggle = () => {
        setIsOpened(!isOpened)
    }
  return (
    <div>
        <header className='lg:p-0 md:p-1 sm:p-2 p-2  shadow-sm'>
        <div className='hidden lg:hidden sm:hidden bg-[#020b80] md:block '>
                        <ul className='flex justify-between items-center gap-3'>
                            <li className='px-1'><FaFacebook size={20}/></li>
                            <li className='px-1'><FaYoutube size={20}/></li>
                            <li className='px-1'><FaInstagramSquare size={20}/></li>
                            <li className='px-1'><SlEnvolopeLetter  size={20} className='inline-block me-1'/>info@sviet.ac.in</li>
                            <li className='px-1'></li>
                            <li className='px-1'><FaPhoneAlt className='inline-block me-1'/>1800 120 1200</li>
                            <li className='px-1'>Photo Gallery</li>
                            <li className='px-1'>Scholarship</li>
                            <li className='px-1 py-1 bg-[#020b80] text-white'>Apply Now</li>
                        </ul>
                    </div>
            <nav className='  lg:flex lg:justify-between bg-white sticky'>
                <div className='logo lg:w-[240px] lg:h-[50px] p-1 md:w-[220px] md:h-[40px] w-[200px] h-[36px] my-auto'>
                    <div>
                        <img src='https://sviet.ac.in/wp-content/uploads/2021/08/svietlogooo-1.png' alt='logo'  />
                    </div>
                </div>
                <div>
                    <div className='bg-[#f69134] md:hidden sm:hidden hidden lg:flex'>
                        <ul className='flex justify-between items-center gap-3'>
                            <li className='px-1'><FaFacebook size={20}/></li>
                            <li className='px-1'><FaYoutube size={20}/></li>
                            <li className='px-1'><FaInstagramSquare size={20}/></li>
                            <li className='px-1'><SlEnvolopeLetter  size={20} className='inline-block me-1'/>info@sviet.ac.in</li>
                            <li className='px-1'></li>
                            <li className='px-1'><FaPhoneAlt className='inline-block me-1'/>1800 120 1200</li>
                            <li className='px-1'>Photo Gallery</li>
                            <li className='px-1'>Scholarship</li>
                            <li className='px-1 py-1 bg-[#020b80] text-white'>Apply Now</li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <ul className='hidden lg:flex justify-between items-center gap-2 pe-4 py-3 font-medium'>
                            <li className='px-1'>Who We Are</li>
                            <li className='px-1'>Institutions</li>
                            <li className='px-1'>Programs</li>
                            <li className='px-1'>Admission</li>
                            
                            <li className='px-1'>Placements</li>
                            <li className='px-1'>International</li>
                            <li className='px-1'>Contact Us</li>
                        </ul>
                        <div className={`lg:hidden justify-end items-center inline-block my-auto mt-[-30px]`}>
                            <GiHamburgerMenu size={40} onClick={toggle}/>
                        </div>
                    </div>
                </div>
            </nav>
            {
                isOpened&&
                <div className='z-10 '>
                    <div className=' bg-black/65 p-4 bg text-white text-center right-0 top-0 left-[50%]'>
                    <ul className='flex flex-col justify-around items-center gap-y-4 pe-4 py-3 font-medium'>
                        <li className='px-1'>Who We Are</li>
                        <li className='px-1'>Institutions</li>
                        <li className='px-1'>Programs</li>
                            <li className='px-1'>Admission</li>
                            <li className='px-1'>Placements</li>
                            <li className='px-1'>International</li>
                            <li className='px-1'>Contact Us</li>
                    </ul>
                </div>
                </div>
                
            }
        </header>
    </div>
  )
}

export default Navbar