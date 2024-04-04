import React from 'react';
import world from '../assets/world.webp';
function World() {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12'>
                <img src={world} alt=""/>
            </div>
            <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 bg-black/10 py-4'>
                        <h3 className='text-2xl font-bold py-4 px-2'>Impaceable Placements</h3>
                        <p className='px-2'>Offering Highly Lucrative Jobs with the highest package of up to 50 LPA, and fulfilling the career dreams of 5000 students.</p>
                        <br/>
                        <button className='text-white bg-orange-500 px-3 py-2' >
                            Read More
                        </button>  
                    </div>
                    <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 bg-black/5 py-4'>
                        <h3 className='text-2xl font-bold py-4 px-2'>International Relations Cell</h3>
                        <p className='px-2'>International is not just Who We Are, It is the standard of What We Do. We are to help you make your endless dreams into a living reality.</p>
                        <br/>
                        <button className='text-white bg-orange-500 px-3 py-2' >
                            Read More
                        </button>  
                    </div>
                    <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 bg-black/5 py-4'>
                        <h3 className='text-2xl font-bold py-4 px-2'>Cultural Diversity</h3>
                        <p className='px-2'>Our Vibrant Culture Is our identity which gives us intellectual and emotional distinction from others</p>
                        <br/>
                        <button className='text-white bg-orange-500 px-3 py-2' >
                            Read More
                        </button>  
                    </div>
                    <div className='col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12 bg-black/10 py-4'>
                        <h3 className='text-2xl font-bold py-4 px-2'>Impaceable Placements</h3>
                        <p className='px-2'>Our aim is to promote the young ideas and guide them in a way, so they can help the mass public while maintaining the spirit of hard work and competency.</p>
                        <br/>
                        <button className='text-white bg-orange-500 px-3 py-2' >
                            Read More
                        </button>  
                    </div>
                    
                </div>
            </div>

        </div>
        
    </div>
  );
}

export default World;
