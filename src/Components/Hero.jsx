import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:'easeOut'}}
      viewport={{once:true}}
      id='home'
      className='min-h-[95vh] flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'
    >
      <div className='container mx-auto px-8 flex flex-col items-center justify-center text-center'>
         <div className='max-w-4xl'>
         <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-gray-100'>
               Hi,I'm <span className='text-purple'>Geetha Tarlana</span>
         </h1>
 
         <h2 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-6 typewriter text-white'>
          Full Stack Developer
         </h2>
         <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>I create stunning web Experience with modern technologies and innovative design.</p>

         <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
          <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white'>View Work</a>
          <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 text-white'>Contact Me </a>
         </div>
         </div>
      </div>

    </motion.div>
  )
}

export default Hero