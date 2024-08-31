import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaFacebookF  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-[#1F2937]  text-white '>
        <section className='max-w-[1200px] mx-auto px-10'>
            <div className='flex flex-col md:flex md:flex-row gap-10 py-8'>
                <div className='pt-6 space-y-4'>
                    <p className='text-2xl font-bold'>Be Ready To Grow</p>
                    <p>Get Exclusive Update straigt to your inbox.</p>
                    <div className='flex gap-2'>
                        <input type='text' placeholder='Email' className='bg-transparent border-2 px-2 rounded-md w-[400px] md:w-[250px]  focus:border-blue-500 outline-none'/>
                        <button className='button px-6'>Ok</button> 
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3  gap-8'>
                    <div className='space-y-2 p-4 w-fit'>
                        <p className='text-xl font-bold'>Quick Links</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Login</p>
                    </div>
                    <div className='space-y-2 p-4'>
                        <p className='text-xl font-bold'>Product</p>
                        <p>Web</p>
                        <p>App</p>
                        <p>Mobile</p>
                    </div>
                    <div className='p-4'>
                        <p className='text-xl font-bold'>Contact Us</p>
                            <div className='py-4 space-y-4 w-fit'>
                                <div className=' flex gap-2 items-center'>
                                    <FaLocationDot className='text-lg' />
                                    <p className='text-md'>Dhaka, Bangladesh</p>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <IoMailOutline className='text-lg' />
                                    <a href='#' className='text-md'>abc@gmail.com</a>
                                </div>
                                
                                <div className='flex gap-2 items-center'>
                                    <MdAddIcCall className='text-lg' />
                                    <a href='#' className='text-md'>+880 176760 2377</a>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        
        <div className='mx-auto pb-6 flex flex-col items-center gap-6 border-t-2 pt-8 sm:flex-row sm:justify-between'>
            <div>
                <p className='text-lg text-gray-400  sm:text-sm'>copyright © 2024 by Arian</p>
            </div>
            <div className='flex gap-2 text-4xl'>
                <FaInstagram />
                <FaFacebookF  />
                <FaLinkedinIn  />
                <FaXTwitter  />
            </div>
            <div className='flex text-lg text-gray-400 gap-4 sm:text-sm'>
                <p className='w-fit'>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
        </section>
    </footer>
  )
}

export default Footer
