import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav data-aos='fade-down' className='p-8 fixed flex justify-between items-center bg-black/10 backdrop-blur-sm  w-full h-14 z-10'>
      <div className='color flex text-2xl  gap-5'>
        <img src={logo} className='w-[32px] h-[32px]'/>
        <span className='uppercase font-bold'>sput-nik </span>
      </div>
      <div className='hidden md:flex md:gap-8 text-white'>

             <a href="#" className='nav'>About</a>
             <a href="#" className='nav'> Technology</a>
             <a href="#" className='nav'>Galaxy</a>
             <a href="#" className='nav'>Satelite</a>
      </div>
      <div className='color border-2 text-center rounded-lg px-3 py-1 hover:bg-gray-700 hover:duration-500'>
        <button className='w-full '>Login</button>
        
      </div>
    </nav>
  )
}

export default Navbar
