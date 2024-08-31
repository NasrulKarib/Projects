import React from 'react'
import moon from '../../assets/moon-surface-hd.png'

const Orbit = () => {
  return (
    <div className='p-4 h-full flex justify-center items-center relative bg-black/20'>
        <div className='container grid grid-cols-1  sm:grid-cols-2 gap-4'>
            <div  className='px-8 space-y-4 text-white '>
                <h1 data-aos='fade-up' data-aos-delay='500' className='text-4xl font-bold uppercase'>Earth's Guardian Satellite</h1>
                <p data-aos='fade-up' data-aos-delay='700' className='text-md'>Experience the breathtaking journey of orbiting the Earth, where every 90 minutes reveals the planet's beauty from space. Witness the sunrise and sunset from above, marvel at the delicate atmosphere, and get a new perspective on the wonders of our world. </p>
                <button data-aos='fade-up' data-aos-delay='900' className='button '>Learn More</button>
            </div>
        </div>

        {/* Moon Surface */}
        <img src={moon} className='absolute left-0 bottom-0  brightness-50'/>
        
        {/* Gradient after moon surface */}
        <div className=' absolute bottom-0 w-full h-[50px] bg-gradient-to-b from-transparent from-30% to-black to-90% '></div>
    </div>
  )
}

export default Orbit
