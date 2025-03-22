import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaAws,
  FaCuttlefish,
  FaPython,
  FaLinux,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-500" /> },
  { icon: <FaReact className="text-blue-400" /> },
  { icon: <SiTailwindcss className="text-cyan-500" /> },
  { icon: <FaDatabase className="text-gray-500" /> },
  { icon: <SiMongodb className="text-green-500" /> },
  { icon: <FaAws className="text-orange-400" /> },
  { icon: <FaCuttlefish className="text-indigo-500" /> },
  { icon: <SiCplusplus className="text-blue-500" /> },
  { icon: <FaPython className="text-yellow-400" /> },
  { icon: <FaLinux className="text-yellow-500 stroke-white stroke-[1.5]" /> },

];

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6 bg-transparent rounded-lg hover:scale-110 transition-transform"
            >
           
              <div className="text-6xl hover:text-gray-300">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
