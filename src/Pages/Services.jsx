import React from 'react'
import Navbar from '../components/Navbar'
import Adegyada from '../components/Adegyada'
import Footer from '../components/Footer'


function Services() {
  return (
   <>
   <Navbar/>
   <div className="bg-[url('./assets/banner.jpg')] h-[500px] bg-cover">
   <h1 className=' text-7xl font-bold text-center py-40'>Our Services</h1>
   </div>

<Adegyada/>
<Footer/>
   
 
   

   </>
  )
}

export default Services