import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
// import { useInView } from 'react-intersection-observer';


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
    const companiesList = [...companies, ...companies]



    return (
        <div className='text-white py-16'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8'>Companies I've Worked With</h2>

                <div className='overflow-hidden relative w-full'>
                    <div className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => {
                            return (
                                <div 
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>{company}</div>
                            )
                        })}
                    </div>
                </div>

                <div className='overflow-hidden relative w-full mt-5'>
                    <div className='whitespace-nowrap flex space-x-10'>
                        {companiesList.map((company, index) => {
                            return (
                                <div 
                                className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'
                                key={index}>{company}</div>
                            )
                        })}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Companies
