import React from 'react'
import { aboutInfo } from '../assets/assets.js'

const Aboutme = () => {
  return (
    <div id="Aboutme" className='py-20 bg-dark-200 '>
      <div className='container mx-auto px-6'>
        <h2 className='text-white text-3xl font-bold text-center mb-4'>About<span className='text-purple'>Me</span></h2>

        <div className='w-full md:w-1/2 mx-auto'>
          <div className='rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold mb-6 text-white'>My Journey</h3>
            <p className='text-gray-200 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint, iusto nesciunt ad voluptate consectetur quidem obcaecati quis alias totam, quibusdam at excepturi iste soluta id maiores blanditiis nulla! Est?</p>
            <p className='text-gray-200 mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat numquam eos alias repudiandae dolor quis provident dolores non quod velit!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
              {
                aboutInfo.map((data, index) => (
                  <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                    <div className={`${data.color} text-4xl mb-4`}>
                      <data.icon />
                    </div>
                    <h3 className='text-xl font-semibold mb-3 text-white'>
                      {data.title}
                    </h3>
                    <p className='text-gray-400'>{data.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme