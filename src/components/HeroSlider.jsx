import React from 'react'
import Slider from 'react-slick'
import img from '../assets/tseg.webp'
import img1 from '../assets/homepage-slide.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      };
  return (
    <div >
        <Slider {...settings} className='overflow-hidden'>
            <div className=''>
                <div className='relative'>
                    <img src={img1} width="100%" height="100%" className='object-contain' alt="" />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                        <br/>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative'>
                    <img src={img} alt="" />
                    <div className='absolute lg:left-[286px] md:left-[95px] left-[95px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-black/75 h-full'>
                    <br/>
                    <div className='my-[50%] ms-[5%]'>
                        <h2 className='lg:text-5xl font-bold'>
                            A Realm of Possibilities <br/> A World of Opportunities
                        </h2>
                    </div>
                </div>
                </div>
                
                
            </div>
        </Slider>
    </div>
  )
}

export default HeroSlider