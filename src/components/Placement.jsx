import React from 'react'
import placement from '../assets/placementt.png'
import Slider from 'react-slick'
const Placement = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        verticalSwiping: true,
    }
  return (
    
    <div className='bg-black/15'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 bg-white'>
                <h3 className='text-3xl font-medium text-center py-1'>Impeccable Placements</h3>
                <img src={placement} alt=""/>
            </div>
            <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 px-4'>
                <Slider {...settings} className='overflow-hidden py-2 px-2'>
                    <div className='w-[280px]'>
                        <div className="bg-white rounded-lg shadow-md border p-4">
                        <div className="flex items-center mb-4">
                            <img className="w-12 h-12 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile Image" />
                            <div>
                                <h2 className="text-lg font-semibold">Mukul Raj</h2>
                                <p className="text-gray-500 text-sm">Published on June 17, 2023</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci
                            fermentum, viverra erat at, accumsan elit. Proin ultrices auctor nisl, eu facilisis lectus condimentum
                            eu.
                        </p>
                        <div className="flex justify-end">
                            <a href="#" className="text-blue-500 font-semibold">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className='w-[280px]'>
                        <div className="bg-white rounded-lg shadow-md border p-4">
                        <div className="flex items-center mb-4">
                            <img className="w-12 h-12 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile Image" />
                            <div>
                                <h2 className="text-lg font-semibold">Mukul Raj</h2>
                                <p className="text-gray-500 text-sm">Published on June 17, 2023</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci
                            fermentum, viverra erat at, accumsan elit. Proin ultrices auctor nisl, eu facilisis lectus condimentum
                            eu.
                        </p>
                        <div className="flex justify-end">
                            <a href="#" className="text-blue-500 font-semibold">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className='w-[280px]'>
                        <div className="bg-white rounded-lg shadow-md border p-4">
                        <div className="flex items-center mb-4">
                            <img className="w-12 h-12 rounded-full mr-3" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile Image" />
                            <div>
                                <h2 className="text-lg font-semibold">Mukul Raj</h2>
                                <p className="text-gray-500 text-sm">Published on June 17, 2023</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac orci
                            fermentum, viverra erat at, accumsan elit. Proin ultrices auctor nisl, eu facilisis lectus condimentum
                            eu.
                        </p>
                        <div className="flex justify-end">
                            <a href="#" className="text-blue-500 font-semibold">Read More</a>
                        </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Placement