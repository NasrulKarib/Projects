import React from 'react'
import earth from './assets/earth2.mp4'
import Navbar from './Components/Navbar/Navbar'
import Orbit from './Components/Orbit/Orbit'
import Service from './Components/Services/Service'
import Mission1 from './Components/Missions/Mission1'
import Mission2 from './Components/Missions/Mission2'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
     duration: 1200,
     easing: "ease-in-out",
    });
  });
  return (
    <div >
       <div className='relative h-[700px]'>
          <video 
              autoPlay 
              loop 
              muted 
              className='fixed w-full h-[700px] object-cover z-[-1]'
            >
            <source src={earth} type="video/mp4" />
          </video>
          <Navbar/>
          <Orbit/>
       </div>
       <Service/>
       <Mission1/>
       <Mission2/>
       <Footer/>
    </div>
  )
}

export default App
