import React from 'react';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Companies from './Companies';


const Work = () => {


    const projects = [
        {
            id: 1,
            title: 'Static Website',
            description: 'Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text',
            image: project1,
            link: '#'
        },
        {
            id: 2,
            title: 'B2B Website',
            description: 'Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text',
            image: project2,
            link: '#'
        },
        {
            id: 3,
            title: 'Dynamic Website',
            description: 'Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text',
            image: project3,
            link: '#'
        },
    ]

    const { ref: ref, inView: inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: paraRef, inView: paraInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={headingRef} initial={{ opacity: 0, y: 100 }} animate={headingInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'>My Work</motion.h2>

                <motion.p
                    ref={paraRef} initial={{ opacity: 0, y: 100 }} animate={paraInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'>Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text</motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map(
                        (project) => {
                            return (
                                <motion.div key={project.id}
                                    ref={containerRef} initial={{ opacity: 0, y: 50 }} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: project.id * 0.2, duration: 0.5 }}
                                    className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'>
                                    <img src={project.image} className='w-full h-48 object-cover' />
                                    <div className='p-6'>
                                        <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                                        <p className='text-slate-400 mb-4 '>{project.description}</p>
                                        <button className='border-2 border-purple-400 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition px-15 py-2'>Details</button>
                                    </div>
                                </motion.div>
                            )
                        }
                    )}
                </div>

            </div>

            <motion.div ref={ref} initial={{opacity:0,y: 100}} animate={inView? {opacity:1, y: 0}:{}} transition={{delay:0.7, duration:0.5}}>
                <Companies/>
            </motion.div>
        </div>
    )
}

export default Work
