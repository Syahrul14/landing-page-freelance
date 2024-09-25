import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Decision Support System (DSS)',
    image: './src/assets/spk.png',
    category: 'Web Design',
  },
  {
    title: 'Movie App',
    image: './src/assets/movie.png',
    category: 'Web Design',
  },
  {
    title: 'Web Company Profile',
    image: './src/assets/pal.png',
    category: 'Web Design',
  },
  {
    title: 'Expense Tracker',
    image: './src/assets/expense.png',
    category: 'Web Design',
  },
  {
    title: 'Edit Photo',
    image: './src/assets/removebg.jpg',
    category: 'Photo Editing',
  },
];

const categories = ['All', 'Web Design', 'Photo Editing', 'Video', 'Copywriter'];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div id='gallery' className="mt-20 mb-20">
      <div className="max-w-7xl mx-auto py-4 text-center">
        <h1 className="font-bold text-5xl">My Projects Gallery</h1>

        <div className="flex flex-wrap justify-center mt-6 space-y-2 sm:space-y-0 sm:space-x-2">
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)}
              className={`mx-2 py-2 px-4 border-b-4 ${activeCategory === category ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500'} hover:border-red-500 hover:text-red-500 transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ${index % 3 === 0 ? 'col-span-2 row-span-2' : 'col-span-1'} mb-4`} 
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg font-bold">{project.title}</h2>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No projects available in this category</p>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .grid {
            display: block;
          }
          .grid > div {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;