import React, {useState} from 'react'
import {data} from '../Data/Data.js'

const Food = () => {
    const [items, setItems] = useState(data)
    
    //filterrrrrrr
    const filter_category = (category)=>{
        setItems(
            data.filter((e)=>{
                return e.category === category
            })
        )
    }
    const filter_price = (price)=>{
        setItems(
            data.filter((e)=>{
                return e.price === price
            })
        )
    }


  return (
    <div className='max-w-[1440px] mx-auto px-2'>
        <h2 className='text-center text-3xl font-bold text-orange-600 md:text-5xl'>Top Rated Menu Items</h2>
        <div className="flex flex-col space-y-6 my-10 justify-between lg:space-y-0 lg:flex-row ">
            <div className="">
                <p className='font-bold text-gray-700'>Filter items</p>
                <div className="flex flex-wrap">
                    <button onClick={()=>setItems(data)} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 py-2 w-20 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filter_category('burger')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 py-2 w-20 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>filter_category('pizza')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 py-2 w-20 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filter_category('salad')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 py-2 w-20 hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={()=>filter_category('chicken')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 py-2 w-20 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            <div className="">
                <p className='font-bold text-gray-700'>Filter Prices</p>
                <div className="">
                    <button onClick={()=>filter_price('$')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 w-20 py-2 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=>filter_price('$$')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 w-20 py-2 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=>filter_price('$$$')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 w-20 py-2 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=>filter_price('$$$$')} className='rounded-3xl mr-2 mt-2 text-orange-600 border border-orange-600 w-20 py-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        <div className="grid mb-10 grid-cols-2 gap-4 sm:gap-6 px-3 lg:grid-cols-4  ">
            {items.map((e,id)=>(
                <div key={id} className="shadow-xl rounded-xl hover:scale-105 duration-500">
                    <img className='w-full rounded-t-xl object-cover h-[180px] md:h-[220px]' src={e.image} alt={e.name}/>
                    <div className="flex p-2 justify-between items-center">
                        <span className='font-bold'>{e.name}</span>
                        <span className='bg-orange-600 text-white rounded-xl text-center w-14 h-6'>{e.price}</span>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Food