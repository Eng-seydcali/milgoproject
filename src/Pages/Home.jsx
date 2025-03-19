import React from 'react';
import Navbar from '../components/Navbar';
import homeimg from "../assets/homeimg.png";
import aboutimg from "../assets/about.png";
import Adegyada from '../components/Adegyada';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="hero bg-[url('./assets/bgcover.png')] h-auto md:h-[500px] bg-cover flex flex-col md:flex-row items-center p-5">
        <div className="content text-center md:text-left">
          <h1 className='text-white text-4xl md:text-6xl font-bold mt-5 md:mt-20'>
            Your trusted source for financial insights and services
          </h1>
          <p className='text-white text-lg md:text-2xl mt-3 md:mt-5'>
            Welcome to BizServe, your one-stop destination for comprehensive financial insights and top-notch services.
          </p>
          <button className='bg-[#CA01FE] text-white font-medium px-6 py-3 rounded-xl mt-5 text-lg'>
            Get A Quote
          </button>
        </div>
        <img className='w-full md:w-[600px] lg:w-[500px]  mt-5 md:mt-10' src={homeimg} alt="Home Image" />
      </div>

      {/* About Section */}
      <h1 className='text-4xl text-center font-bold my-10'>About Me</h1>
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

      <Adegyada />
      <Footer />
    </>
  );
}

export default Home;
