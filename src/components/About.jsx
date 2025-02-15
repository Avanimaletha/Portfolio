import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-72 rounded-full object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg">
              "I am a passionate developer with a strong focus on building
              modern and responsive web applications. As a cloud enthusiast, I
              love exploring scalable solutions and optimizing performance.
              Problem-solving excites me, and I thrive on tackling challenges
              with creativity and innovation to build unique and efficient
              applications.
              <br></br> <br></br>
              Currently, I am in my third year of pursuing a B.Tech degree from
              SRM University, Ramapuram, Chennai. My academic journey has given
              me a solid foundation in computer science and has further fueled
              my interest in technology. I am a lifelong learner, always
              exploring new technologies and methodologies to expand my skill
              set.
              <br></br> <br></br>I strongly believe in the power of
              collaboration and love connecting with like-minded people who
              share the same passion for technology and development. Whether
              it’s discussing new tools or brainstorming project ideas, I enjoy
              learning from others and contributing to shared goals."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
