import React from 'react'
import Navbar from '../components/Navbar'
import Neeraj from '../assets/Neeraj.PNG'

const Home = () => {
  return (
      
    <div className=" bg-black text-white max-w-5xl h-screen">
        
        <div className=' sticky top-0 '>
        <Navbar/>
        </div>
        
        <div className=' flex flex-row h-1/2 justify-between p-12 items-center '>
        <div>
        <div className=" text-5xl font-bold font-serif p-5 ">Hi, I'm Neeraj</div>
        <div className=' text-xl w-auto max-w-lg break-words p-5 '>I intend to be a part of an organization where I can constantly learn and develop my technical skills.</div>
        </div>
        <div className=' w-1/4 h-1/4'>
            <img className=' rounded-full ' src={Neeraj} alt="Neeraj" />
        </div>
        </div>

        
        
    </div>
  )
}

export default Home
