import React from 'react'

const Grid = () => {
  return (
    <div className='p-4 py-5'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='lg:col-span-7 md:col-span-6 sm:col-span-12 col-span-12 h-[360px]' style={{backgroundImage: `url(https://sviet.ac.in/wp-content/uploads/2018/10/5-1.jpg)`,opacity:'0.9',backgroundSize:"100%",backgroundRepeat:"no-repeat",}}>
                <div className='my-[10%] flex flex-col p-5 h-full w-full'>
                    <div>
                        <h1 className='text-4xl font-bold text-white '>Placements</h1>
                        <br/>
                    </div>
                    <div>
                        <p className='text-white '>We are a leading educational group in North India, providing the best education in the fields of Engineering, Management, Pharmacy, Polytechnic, and many more.</p>
                        <button className='text-white my-2 px-3 py-2 bg-orange-500 hover:bg-blue-700 duration-200'>
                            Read More
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className='lg:col-span-5 md:col-span-6 sm:col-span-12 col-span-12 h-[360px]' style={{backgroundImage: `url(https://sviet.ac.in/wp-content/uploads/2021/10/auditorium-2-scaled.jpg)`,opacity:'0.88',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className='my-[10%] flex flex-col p-5 h-full w-full'>
                    <div>
                        <h1 className='text-4xl font-bold text-white '>Our Leading Recruiters</h1>
                        <br/>
                    </div>
                    <div>
                        <p className='text-white '>We are a leading educational group in North India, providing the best education in the fields of Engineering, Management, Pharmacy, Polytechnic, and many more.</p>
                        <button className='text-white my-2 px-3 py-2 bg-orange-500 hover:bg-blue-700 duration-200'>
                            Read More
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='grid grid-cols-12 gap-x-3 gap-y-3 my-3'>
            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 h-[360px]'  style={{backgroundImage: `url(https://sviet.ac.in/wp-content/uploads/2022/04/trtr.jpg)`,opacity:'0.9',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className='my-[10%] flex flex-col p-5 h-full w-full'>
                    <div>
                        <h1 className='text-4xl font-bold text-white '>Student Acheivements</h1>
                        <br/>
                    </div>
                    <div>
                        <p className='text-white '>We are a leading educational group in North India, providing the best education in the fields of Engineering, Management, Pharmacy, Polytechnic, and many more.</p>
                        <button className='text-white my-2 px-3 py-2 bg-orange-500 hover:bg-blue-700 duration-200'>
                            Read More
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className='lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 h-[360px]'  style={{backgroundImage: `url(https://sviet.ac.in/wp-content/uploads/2021/07/dfdf.jpg)`,opacity:'0.9',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div className='my-[10%] flex flex-col p-5 h-full w-full'>
                    <div>
                        <h1 className='text-4xl font-bold text-white '>Super 60 Batch</h1>
                        <br/>
                    </div>
                    <div>
                        <p className='text-white '>There is a batch of 30 to 60 students where they are prepared to become industry level engineers</p>
                        <button className='text-white my-2 px-3 py-2 bg-orange-500 hover:bg-blue-700 duration-200'>
                            Read More
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid