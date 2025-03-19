import React from 'react'
import Navbar from '../components/Navbar'
import homeimg from "../assets/homeimg.png"
import aboutimg from "../assets/About.png"
import Adegyada from '../components/Adegyada'
import Footer from '../components/Footer'



function Home() {
    
  return (
    <>
    <Navbar/>

<div className="hero bg-[url('./assets/bgcover.png')] h-[500px] bg-cover flex   ">
    <div className="content">
        <h1 className='text-white text-6xl font-bold ml-10 mt-20'>Your trusted source
for financial insights
and services</h1>
        <h1 className=' text-white text-2xl mt-5 ml-10  '>Welcome to BizServe, your one-stop destination for comprehensive
        financial insights and top-notch services.</h1>
        <button className='bg-[#CA01FE] text-white font-medium px-4 py-2 rounded-xl ml-10 mt-5 text-xl -text-white '>Get A Quote</button>
    </div>
    <img className='w-[800px] mr-32 mt-10 ml-10' src={homeimg} alt="" />
</div>

 {/* end hero section  */}
 <h1 className='text-4xl text-center font-bold my-10'>About Me</h1>

 <div className="about flex ">
    <img className='w-[500px] m-10 rounded-xl' src={aboutimg} alt="" />
    <div className="contect">
        <h1 className='text-4xl font-medium mt-20 mx-10'>Get Ready for Success with Bizmax Your Path to Growth.</h1>
        <p className='text-2xl mt-5 mx-10'>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics, and other branding materials.</p>
    <button className='bg-[#CA01FE] text-white font-medium px-4 py-2 rounded-xl ml-10 mt-5 text-xl -text-white '>Get A Quote</button>
    </div>


 </div>

 {/* end about section  */}


<Adegyada/>
<Footer/>

 </>
)
}

export default Home