import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
    <img src={HeroImage} alt="" 
    className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
    transition-transform duration-300 hover:scale-105'/>
    <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400"
>Avani Maletha </span>
        Developer/DSA/Devops
    </h1>
    <p className='mt-4 text-lg text-gray-300'>
    "I craft sleek, high-performance web applications with a focus on responsiveness and modern design."
    </p>
    <div className='mt-8 space-x-4'>
    <a 
  href="mailto:avanimaletha@example.com" 
  className="inline-block bg-gradient-to-r 
             from-gray-800 to-gray-900 text-white px-4 py-2 
             rounded-full mx-2">
  Contact Me
</a>

<a 
  href="." 
  download 
  className="inline-block bg-gradient-to-r 
             from-gray-800 to-gray-900 text-white px-4 py-2 
             rounded-full mx-2"
>
  Download Resume
</a>

    </div>

</div>
  )
}

export default Hero
