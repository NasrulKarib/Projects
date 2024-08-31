import React from 'react'
import Satellite from '../../assets/sattelite.png'
const Mission1 = () => {
  return (
    <div className=" bg-black text-white  w-full">
        <div className='container p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center '>
            <div data-aos='zoom-in'   className=' object-cover mx-auto'>
                <img src={Satellite} className=' w-full mx-auto sm:w-[75%]' />
            </div>
            <section  className='p-10 xl:pr-28 space-y-4 border-r-2 border-r-blue-800/70 border-b-2 border-b-blue-800/70'>
                <p data-aos='fade-down'  className='text-blue-800'>Our Mission</p>
                <p data-aos='fade-right' data-aos-delay='300'className='uppercase text-5xl'>Rapidcast</p>
                <p data-aos='fade-left' data-aos-delay='500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias exercitationem reiciendis eaque! Totam autem, assumenda culpa architecto id aliquam nesciunt magnam quas, ut quos corporis officiis tenetur at veniam dicta!</p>
                <div data-aos='fade-up' data-aos-delay='600' className='button'>
                    <button>Learn More</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Mission1
