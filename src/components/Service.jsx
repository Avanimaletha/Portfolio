import React from "react";
import { Code, Layout, Cloud, Database, Layers } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "Designing visually captivating and highly functional websites that provide seamless user experiences. With a focus on aesthetics, usability, and modern trends, I create web designs that are both engaging and intuitive, ensuring that every project stands out while meeting user needs effectively.",
    icon: <Layout size={28} className="text-orange-500" />, // Web Design - Orange
  },
  {
    title: "Development",
    description:
      "Building dynamic, responsive, and visually engaging user interfaces with clean, efficient code. I specialize in transforming designs into interactive web experiences using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Tailwind. My goal is to create fast, accessible, and seamless applications that enhance user interaction and functionality.",
    icon: <Code size={28} className="text-yellow-500" />, // Development - Yellow
  },
  {
    title: "AWS",
    description:
      "Leveraging the power of AWS to build scalable, secure, and high-performance cloud solutions. From deploying applications and managing cloud infrastructure to optimizing performance and ensuring reliability, I specialize in using AWS services like EC2, S3, Lambda, and RDS to create cost-effective and resilient cloud architectures.",
    icon: <Cloud size={28} className="text-blue-500" />, // AWS - Blue
  },
  {
    title: "Database",
    description:
      "Designing and managing efficient, scalable, and secure databases using SQL and NoSQL technologies. Whether it's structuring relational databases with MySQL and Mongo DB or handling flexible, document-based storage with MongoDB, I ensure data integrity, optimization, and seamless integration for high-performance applications.",
    icon: <Database size={28} className="text-green-500" />, // Database - Green
  },
  {
    title: "DSA",
    description:
      "Mastering efficient problem-solving with Data Structures and Algorithms (DSA) in C++. From fundamental concepts like arrays, linked lists, and trees to advanced algorithms such as dynamic programming and graph traversal, I write optimized, high-performance code to tackle complex computational challenges.",
    icon: <Layers size={28} className="text-purple-500" />, // DSA - Purple
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 text-2xl font-semibold text-[#f5f5dc] mb-4">
                {service.icon}
                <span>{service.title}</span>
              </div>
              <p className="text-[#f5f5dc]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
