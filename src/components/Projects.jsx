import React from "react";
import Chat from "../assets/chat.png";
import Weather from "../assets/weather.png";
import Vizualization from "../assets/vizulization.png";
import Orbitus from "../assets/orbitus.png";
import MemeGen from "../assets/meme-gen.png";
import Dictionary from "../assets/dictionary.png";
import Country from '../assets/Country.png'
import Crypto from '../assets/crypto.png'

const projects = [
  {
    name: " AWS-Vizualization",
    technologies: "AWS   S3   QuickSight",
    image: Vizualization,
    github: "https://github.com/Avanimaletha/AWS-Visualization-Quicksight",
  },
  {
    name: "Chat-AI",
    technologies: "React JS    Tailwind",
    image: Chat,
    github: "https://github.com/Avanimaletha/Chat-AI",
    LiveDemo: "https://chat-ai-ebon-eight.vercel.app/",
  },
  {
    name: "OrbitUS",
    technologies: "Web3   NFT   ReactJS",
    image: Orbitus,
    github: ".",
    LiveDemo: "https://devfolio.co/projects/orbitus-d287",
  },
  {
    name: "Weather",
    technologies: "React JS    Tailwind",
    image: Weather,
    github: "https://github.com/Avanimaletha/weather-app",
    LiveDemo: "https://weather-app-f5f1.vercel.app/",
  },
  {
    name: "Country-Guide",
    technologies: "JavaScript ",
    image: Country,
    github: "https://github.com/Avanimaletha/Country-Guide",
    LiveDemo: "https://country-guide-blue.vercel.app/",
  },
  {
    name: "Live-Crypto",
    technologies: "JavaScript ",
    image: Crypto,
    github: "https://github.com/Avanimaletha/live-crypto",
    LiveDemo: "https://live-crypto-one.vercel.app/",
  },
  {
    name: "Meme-Gen",
    technologies: "JavaScript ",
    image: MemeGen,
    github: "https://github.com/Avanimaletha/Meme-gen",
    LiveDemo: "https://meme-gen-jade.vercel.app/",
  },
  {
    name: "Dictionary",
    technologies: "JavaScript ",
    image: Dictionary,
    github: "https://github.com/Avanimaletha/Gemini-Clone",
    LiveDemo: "https://dictionary-app-delta-ochre.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
          transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
            w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
      from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full mx-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.LiveDemo}
                  className="inline-block bg-gradient-to-r 
      from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full mx-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
