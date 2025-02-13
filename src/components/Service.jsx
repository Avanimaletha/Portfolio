import React from 'react'

const services =[
  {
   
    title: "Web Design",
    description: "Designing visually captivating and highly functional websites that provide seamless user experiences. With a focus on aesthetics, usability, and modern trends, I create web designs that are both engaging and intuitive, ensuring that every project stands out while meeting user needs effectively.",
  },
  {
   
    title: "Development",
    description: "Building dynamic, responsive, and visually engaging user interfaces with clean, efficient code. I specialize in transforming designs into interactive web experiences using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Tailwind. My goal is to create fast, accessible, and seamless applications that enhance user interaction and functionality.",
  },
  {
    
    title: "AWS",
    description: " Leveraging the power of AWS to build scalable, secure, and high-performance cloud solutions. From deploying applications and managing cloud infrastructure to optimizing performance and ensuring reliability, I specialize in using AWS services like EC2, S3, Lambda, and RDS to create cost-effective and resilient cloud architectures.",
  },
  {
   
    title: "Database",
    description: "Designing and managing efficient, scalable, and secure databases using SQL and NoSQL technologies. Whether it's structuring relational databases with MySQL and PostgreSQL or handling flexible, document-based storage with MongoDB, I ensure data integrity, optimization, and seamless integration for high-performance applications.",
  },
  {
    title:"DSA",
    description:" Mastering efficient problem-solving with Data Structures and Algorithms (DSA) in C++. From fundamental concepts like arrays, linked lists, and trees to advanced algorithms such as dynamic programming and graph traversal, I write optimized, high-performance code to tackle complex computational challenges."
  },
 
]


const Service = () => {
  return (
  <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
         <div
         key={service.id}
         className="bg-gray-900 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                    transition-transform duration-300 hover:scale-105"
       >
         <div className="text-right text-2xl font-bold text-[#f5f5dc]">
           {service.id}
         </div>
         <h3 className="mt-2 text-2xl font-bold text-gray-600">
           {service.title}
         </h3>
         <p className="mt-2 text-[#f5f5dc]">{service.description}</p>
         <a href="#" className="mt-4 inline-block text-[#f5f5dc] hover:text-gray-500">Read More</a>
       </div>
       
        
         
         
         
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
