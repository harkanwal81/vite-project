import React from 'react';
import { FaAppStore } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const servicesData = [
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
    {
        title: "App Design",
        description: " Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph"
    },
]

const Services = () => {

    const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: subContainerRef, inView: subContainerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div id="services" className='text-white py-16'>
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, y: 50 }}
                animate={containerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
                <p className='mb-12 text-gray-400'>
                    Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((service, index) => {
                        return (<motion.div
                            ref={subContainerRef}
                            initial={{ opacity: 0,scale: 0 }}
                            animate={subContainerInView ? {opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: (index * 0.2) }}
                            key={index} className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300'>
                            <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
                            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                            <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                        </motion.div>)
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Services
