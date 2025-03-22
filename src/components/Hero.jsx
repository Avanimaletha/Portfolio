import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
    transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Hey there!
        <span
          className="inline-block animate-wave"
          style={{ display: "inline-block" }}
        >
          👋
        </span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          I’m Avani Maletha{" "}
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        "I craft sleek, high-performance web applications with a focus on
        responsiveness and modern design."
      </p>
      <div className="mt-8 space-x-4">
        {/*<a 
  href="mailto:avanimaletha@example.com" 
  className="inline-block bg-gradient-to-r 
             from-gray-800 to-gray-900 text-white px-4 py-2 
             rounded-full mx-2">
  Contact Me
</a>*/}

        <a
          href="."
          download
          className="inline-block bg-gradient-to-r 
             from-gray-800 to-gray-900 text-white px-4 py-2 
             rounded-full mx-2"
        >
          Resume
        </a>
      </div>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            20% { transform: rotate(20deg); }
            40% { transform: rotate(-10deg); }
            60% { transform: rotate(10deg); }
            80% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-wave {
            animation: wave 1.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
