import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://formspree.io/f/mdanbodg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSubmitted(true)
        e.target.reset()
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1,ease:'easeOut'}}
      viewport={{once:false,amount:0.2}}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>Get In <span className='text-purple'>Touch</span></h2>
        <p className='text-center max-w-2xl mx-auto mb-16 text-white'>
          I'd love to hear from you! Send me a message and I'll respond as soon as possible.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Info */}
          <div>
            <h3 className='text-2xl font-semibold mb-6 text-white'>Contact Information</h3>
            <div className='space-y-6'>
              <div className='flex items-center'>
                <FaEnvelope className='text-purple text-xl mr-4' />
                <div>
                  <p className='text-white font-medium'>Email</p>
                  <p className='text-gray-400'>geethatarlana29@gmail.com</p>
                </div>
              </div>
              
              <div className='flex items-center'>
                <FaMapMarkerAlt className='text-purple text-xl mr-4' />
                <div>
                  <p className='text-white font-medium'>Location</p>
                  <p className='text-gray-400'>Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <h4 className='text-lg font-semibold mb-4 text-white'>Follow Me</h4>
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/geetha-tarlana-103689252/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-purple transition-colors text-2xl'>
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/geethanjali925/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-purple transition-colors text-2xl'>
                  <FaInstagram />
                </a>
                <a href="https://github.com/geetha925" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-purple transition-colors text-2xl'>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className='text-center py-12'>
                <h3 className='text-2xl font-semibold mb-4 text-white'>Thank You!</h3>
                <p className='text-gray-300'>I'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-white font-medium mb-2'>Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='w-full px-4 py-3 bg-dark-300 border border-gray-600 rounded-lg focus:outline-none focus:border-purple text-white'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-white font-medium mb-2'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='w-full px-4 py-3 bg-dark-300 border border-gray-600 rounded-lg focus:outline-none focus:border-purple text-white'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-white font-medium mb-2'>Message</label>
                  <textarea
                    name='message'
                    id='message'
                    rows='5'
                    className='w-full px-4 py-3 bg-dark-300 border border-gray-600 rounded-lg focus:outline-none focus:border-purple text-white resize-none'
                    placeholder='Your message here...'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-white disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact