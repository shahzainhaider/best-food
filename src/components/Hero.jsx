import React from 'react'
import one from './1.jpg'

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2">
    <div className=' relative max-h-[500px] rounded-lg my-3'>
        <div className="absolute bg-black/40 w-full px-4 rounded-xl  h-full flex flex-col justify-center">
            <h2 className=' text-4xl font-bold text-white md:text-5xl lg:text-6xl'>The<span className='text-orange-500'> Best</span></h2>
            <h2 className=' text-4xl font-bold text-orange-500 md:text-5xl lg:text-6xl'>Foods<span className='text-white'> Delivered</span></h2>
        </div>
        <img className='w-full max-h-[500px] object-cover rounded-xl ' src={one} alt="" />
    </div>
    </div>
  )
}

export default Hero