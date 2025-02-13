import React from 'react'
import AboutImage from '../assets/aboutme-image.png'

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <img
          src={AboutImage}
          alt=""
          className="w-72 h-72 rounded-full object-cover mb-8 md:mb-0"
        />
        <div className="flex-1">
          <p className="text-lg mb-8">
          "I am a passionate developer with a strong focus on building modern and responsive web applications.
           As a cloud enthusiast, I love exploring scalable solutions and optimizing performance. Problem-solving excites me,
           and I thrive on tackling challenges with creativity and innovation to build unique and efficient applications."
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                HTML & CSS
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
              <div
             className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-10/12"
              ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
               JavaScript
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
              <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-10/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                React JS
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
              <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-7/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
               TailWind
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-7/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                AWS
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-8/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                SQL
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-10/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                C/C++
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-6/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                Python
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-gray-200 to-gray-400 h-2.5 rounded-full 
             transform transition-transform duration-300 hover:scale-105 w-7/12"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
