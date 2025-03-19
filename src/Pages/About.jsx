import React from 'react'
import Navbar from '../components/Navbar'
import aboutimg from "../assets/about.png"
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <Navbar/>

    <div className="bg-[url('./assets/abcover.jpg')] h-[450px] bg-cover">
    <h1 className='text-white text-7xl font-bold text-center py-40'>About Me</h1>

     
     </div>
     <div className="about flex flex-col md:flex-row items-center p-5">
             <img className='w-full md:w-[500px] rounded-xl' src={aboutimg} alt="About Image" />
             <div className="content text-center md:text-left md:ml-10">
               <h1 className='text-3xl md:text-4xl font-medium mt-5 md:mt-20'>
                 Get Ready for Success with Bizmax Your Path to Growth.
               </h1>
               <p className='text-lg md:text-2xl mt-3 md:mt-5'>
                 Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials.
               </p>
               <button className='bg-[#CA01FE] text-white font-medium px-6 py-3 rounded-xl mt-5 text-lg'>
                 Get A Quote
               </button>
             </div>
           </div>
     <Footer/>
    </>
  )
}

export default About