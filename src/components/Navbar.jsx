import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className='bg-[#100321] border border-b-1 border-white border-x-0 border-t-o mx-auto p-5 flex justify-between items-center '>
        <img className='w-32' src={logo} alt="" />
        <div className="menu   ">
            <ul className='flex gap-8 text-white text-xl '>
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Projects"><li>Projects</li></Link>
                <Link to="/Services"><li>Services</li></Link>
                <Link to="/"><li>Contuct Us</li></Link>
                
            </ul>
        </div>
        <button className='bg-[#CA01FE] text-white font-medium  text-xl px-6 py-2 rounded-xl'>Get Started</button>
    </nav>
    </>
    
  )
}

export default Navbar