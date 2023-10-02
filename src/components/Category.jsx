import React from 'react'
import {categories} from '../Data/Data'

const Category = () => {
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-10'>
        <h2 className='text-3xl font-bold text-orange-600 text-center md:text-5xl'>Top Rated Menu items</h2>
        <div className="grid grid-cols-2 py-10 gap-6 md:grid-cols-4">
            {categories.map((e,id)=>(
                <div key={e.id} className="flex font-semibold text-lg rounded-md shadow-xl items-center px-2  justify-between md:px-8 duration-500 hover:scale-105 bg-gray-100">
                    <p>{e.name}</p>
                    <img className=' w-16 md:w-20' src={e.image} alt={e.name} />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Category