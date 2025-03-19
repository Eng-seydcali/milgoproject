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
     <div className="about flex ">
        <img className='w-[500px] m-10 rounded-xl' src={aboutimg} alt="" />
        <div className="contect">
            <h1 className='text-4xl font-medium mt-20 mx-10'>Get Ready for Success with Bizmax Your Path to Growth.</h1>
            <p className='text-2xl mt-5 mx-10'>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials.</p>
        <button className='bg-[#CA01FE] text-white font-medium px-4 py-2 rounded-xl ml-10 mt-5 text-xl -text-white '>Get A Quote</button>
        </div>
    
    
     </div>

     <Footer/>
    </>
  )
}

export default About