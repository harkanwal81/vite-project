import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';


const Companies = () => {

    const companies = [
        'IndiaMART Intermesh Ltd',
        'Tata Consultancy Services',
        'Tech Mahindra',
        'Infosys',
        'IBM',
        'Oracle',
        'Accenture'

    ]
    const companiesList = [...companies, ...companies, ...companies]

    const scrollVariant1 = {
        animate: {
            x: [0, -2000],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear'
            }
        }
    }

    const scrollVariant2 = {
        animate: {
            x: [-2000, 0],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear'
            }
        }
    }


    return (
        <div className='text-white py-16'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies I've Worked With</h2>

                <div className='overflow-hidden relative w-full'>
                    <motion.div 
                    variants={scrollVariant1}
                    animate="animate"
                    className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => {
                            return (
                                <div 
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>{company}</div>
                            )
                        })}
                    </motion.div>
                </div>

                <div className='overflow-hidden relative w-full mt-5'>
                    <motion.div 
                    variants={scrollVariant2}
                    animate="animate" className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => {
                            return (
                                <div 
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>{company}</div>
                            )
                        })}
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Companies
