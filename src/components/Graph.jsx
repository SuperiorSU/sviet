import React from 'react'
import stat from '../assets/graph2.webp'
import gr from '../assets/graph1.webp'
const Graph = () => {
  return (
    <div className='py-5 px-5'>
        <h2 className='text-4xl font-semibold'>GIVING WINGS TO YOUR CAREER</h2>
        <div className='grid grid-cols-12 py-5 place-items-center'>
            <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 py-5'>
                <p>Under the guidance of our trained faculty and with the support of our alumni network from different parts of the globe, we have been supplementing the careers of students. Be it preparation for government & defense services, getting a dream job at MNC’s, or starting up your own venture, SVGOI gives you the right direction towards a successful career track.</p>
                <div>
                    <img src={gr} className='mx-auto' alt="" />
                </div>
            </div>
            <div className='lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12'>
                <img src={stat} alt=""/>
            </div>

        </div>
    </div>
  )
}

export default Graph