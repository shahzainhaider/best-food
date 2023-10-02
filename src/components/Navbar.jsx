import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu,AiFillTag, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaUserFriends,FaWallet} from 'react-icons/fa'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)


  return (
    <>
    <header className=''>
        <div className="flex items-center px-2 max-w-[1440px] mx-auto justify-between">
         {/* /* *********************left side****************** */}
        <div className='flex my-4 items-center justify-center space-x-2'>
            <div>
                <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='cursor-pointer' size={30}/>
            </div>
            <h1 className='text-2xl md:text-4xl'>Best<span className='font-bold'> Eats</span></h1>
            <div className='hidden bg-gray-100 pr-2 space-x-1 rounded-full items-center lg:flex'>
                <p className='rounded-full p-2 bg-black text-white'>Dilevery</p>
                <p>Pickup</p>
            </div>
        </div>
        {/* *************************right side******************* */}
        <div className="flex items-center my-2 bg-gray-100 px-2 w-[200px] sm:w-[400px] lg:w-[500px] rounded-full w-">
            <AiOutlineSearch size={20}/>
            <input type="text" placeholder='search here' className='w-full p-2 bg-transparent focus:outline-none'/>
        </div>
        <button className='hidden bg-black text-white py-2 px-5 rounded-full items-center md:flex'><BsFillCartFill size={20} className='mr-2'/>Cart</button>
        {/* ******************overlay***************** */}
        {toggle? <div className='bg-black/60 h-screen w-full fixed z-10 top-0 left-0'></div>:''}
        {/* <div className='bg-black/50 h-screen w-full fixed z-10 top-0 left-0'></div> */}
        {/* ***************slide menu*************** */}
        <div className={toggle?'bg-white w-[300px] h-screen fixed px-2 py-4 duration-300 top-0 left-0 z-10':'bg-white w-[300px] h-screen fixed p-2 top-0 left-[-100%] z-10'}>
        <h1 className='text-3xl md:text-4xl'>Best<span className='font-bold'> Eats</span></h1>
            <AiOutlineClose onClick={()=>{setToggle(!toggle)}} size={30} className='absolute right-3 top-4 cursor-pointer'/>
            <nav>
                <ul className='flex flex-col'>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><TbTruckDelivery size={25} className='mr-4'/>Orders </li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><MdFavorite size={25} className='mr-4'/>Favrites </li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><FaWallet size={25} className='mr-4'/>Wallet</li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><MdHelp size={25} className='mr-4'/>Help</li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><AiFillTag size={25} className='mr-4'/>Promotion</li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><BsFillSaveFill size={25} className='mr-4'/>Best One</li>
                 <li className='flex py-3 hover:scale-105 cursor-pointer text-lg'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
                </nav>
        </div>
        </div>
    </header>
        </>
  )
}

export default Navbar