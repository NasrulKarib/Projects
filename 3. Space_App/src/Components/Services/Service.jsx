import React from 'react'
import Wave from '../../assets/wave Gif.gif'
import { TiWeatherStormy } from "react-icons/ti";
import { PiGpsFixFill } from "react-icons/pi";
import { FaBroadcastTower } from "react-icons/fa";

const ServiceData = [
    {
      title: "LEO",
      content: "160-2000 km",
      description:
        "Used or Earth observation, weather monitoring, and communication satellites.",
      icon: <TiWeatherStormy className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "MEO",
      content: "< 35,786 km",
      description:
        "It is often used for navigation systems like GPS and serves as a space environment research ground",
      icon: <PiGpsFixFill className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GEO",
      content: "35,786 km <",
      description:
        "This orbit is ideal for communication, weather, and broadcasting satellites.",
      icon: <FaBroadcastTower className="text-7xl" />,
      aosDelay: "700",
    },
  ];

const Service = () => {
  return (
    <div className=' bg-black '>
      <div className='container min-h-[400px]'>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:justify-items-center gap-6 p-2 relative z-10'>
            {
                ServiceData.map((data)=>(
                    <div data-aos='flip-left' data-aos-delay={data.aosDelay} className=' px-7 py-6 text-white text-2xl  flex flex-col justify-center items-center text-center gap-3 bg-sky-900/55 rounded-xl lg:w-[300px]'>
                        {data.icon}
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <p className='text-sm '>{data.description}</p>
                    </div>
                )
              )
            }

        </div>
        <img src={Wave} className='h-[200px] object-cover  w-full -translate-y-28 '/>
        
      </div>
    </div>
  )
}

export default Service
