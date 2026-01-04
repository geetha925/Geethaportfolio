import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  const ProjectCard = ({ title, description, image, tech, icons, demo, code }) => (
    <div className='bg-dark-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <img src={image} alt={title} className='w-full h-48 object-cover' loading="lazy" />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((techItem, idx) => (
            <span key={idx} className='px-2 py-1 bg-purple/20 text-purple rounded text-sm'>
              {techItem}
            </span>
          ))}
        </div>
        <div className='flex justify-between items-center'>
          <a href={demo} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white'>Demo</a>
          <a href={code} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white'>Code</a>
        </div>
      </div>
    </div>
  );

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.div 
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration: isMobile ? 0.45 : 1, ease:'easeOut'}}
      viewport={{once:false,amount: isMobile ? 0.05 : 0.2}}
      id='projects'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>My
          <span className='text-purple'>Projects</span>
        </h2>
        <p className='text-center max-w-2xl mx-auto mb-16 text-white'>
          Selection of my recent work
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          }
        </div>
        <div className='text-center mt-12'>
          <a href="#" className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>
            <span className='text-white'>view more projects</span>
            <FaArrowRight className='ml-2'/>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects