import React from 'react'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'

const Headlines = () => {
  return (
    <div className='max-w-[1440px] my-10 mx-auto p-2 grid md:grid-cols-3 gap-6'>
        {/* **************card */}
        <div className='relative'>
            <div className="absolute w-full h-full rounded-xl bg-black/40 p-4">
                <p className='text-white text-xl font-bold'>Sun's Out,Bogo's Out</p>
                <p className='text-white'>through 7/24</p>
                <button className='absolute bottom-4 bg-white font-semibold text-black py-2 px-4 rounded-full'>Order Now</button>
            </div>
            <img className='h-[160px] w-full rounded-xl object-cover' src={two} alt="" />
        </div>
        <div className='relative'>
            <div className="absolute w-full h-full rounded-xl bg-black/40 p-4">
                <p className='text-white text-xl font-bold'>Sun's Out,Bogo's Out</p>
                <p className='text-white'>through 7/24</p>
                <button className='absolute bottom-4 bg-white font-semibold text-black py-2 px-4 rounded-full'>Order Now</button>
            </div>
            <img className='h-[160px] w-full rounded-xl object-cover' src={three} alt="" />
        </div>
        <div className='relative'>
            <div className="absolute w-full h-full rounded-xl bg-black/40 p-4">
                <p className='text-white text-xl font-bold'>Sun's Out,Bogo's Out</p>
                <p className='text-white'>through 7/24</p>
                <button className='absolute bottom-4 bg-white font-semibold text-black py-2 px-4 rounded-full'>Order Now</button>
            </div>
            <img className='h-[160px] w-full rounded-xl object-cover' src={four} alt="" />
        </div>

    </div>
  )
}

export default Headlines