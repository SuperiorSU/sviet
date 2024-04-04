import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
const Stats = () => {
  return (
    <div className='p-5'>
        <div className='flex justify-center md:gap-1 sm:gap-4 gap-4 lg:gap-0 flex-wrap items-center w-full'>
            <div className='w-full lg:w-1/4 md:w-1/3 sm:w-1/2'>
                <div className='flex flex-col gap-y-3  text-white bg-[#f69134] p-3 justify-center'>
                    <div className='m-auto '>
                        <SlEnvolopeLetter size={50} className=''/>
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-center'>3000+</h3>
                        <p className='text-xl text-center'>Offer Letters</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/4 md:w-1/3 sm:w-1/2'>
                <div className='flex flex-col gap-y-3  text-white bg-black p-3 justify-center'>
                    <div className='m-auto '>
                        <SlEnvolopeLetter size={50} className=''/>
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-center'>3000+</h3>
                        <p className='text-xl text-center'>Offer Letters</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/4 md:w-1/3 sm:w-1/2'>
                <div className='flex flex-col gap-y-3  text-white bg-[#f69134] p-3 justify-center'>
                    <div className='m-auto '>
                        <SlEnvolopeLetter size={50} className=''/>
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-center'>3000+</h3>
                        <p className='text-xl text-center'>Offer Letters</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/4 md:w-1/3 sm:w-1/2'>
                <div className='flex flex-col gap-y-3  text-white bg-black p-3 justify-center'>
                    <div className='m-auto '>
                        <SlEnvolopeLetter size={50} className=''/>
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium text-center'>3000+</h3>
                        <p className='text-xl text-center'>Offer Letters</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats