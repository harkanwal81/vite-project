import React from 'react';
import avtar from '../assets/Avatar.png';
// eslint-disable-next-line no-unused-vars
import { motion, scale } from 'motion/react';
import { Link } from 'react-scroll';
const Hero = () => {
    return (
        <div className='text-white py-10'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='mx-auto w-1/2 sm:w-1/4 md:w-2/12' src={avtar} />

            <div className='container mx-auto text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5 }}
                    className='text-3xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>Your Story, Your Way!
                    <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.5 }}
                        className='text-purple-400'>Build your personal portfolio</motion.span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5 }}
                    className='text-gray-400 text-lg mb-8 p-2'>Showcase your journey by crafting a personal portfolio with in a minutes</motion.p>

                <div className='flex gap-x-4 mb-10 justify-center'>
                    <motion.button initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
                        <Link to='about' smooth='true' duration={500} offset={10} className='text-white border-white border px-6 py-3 rounded-full'>
                            My Story</Link>
                    </motion.button>
                    <motion.button initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
                        <Link className='bg-purple-500 text-white px-6 py-3 rounded-full' to='contact' smooth='true' duration={500} offset={10}>
                            Hire Me
                        </Link>
                    </motion.button>

                </div>
            </div>
        </div>
    )
}

export default Hero
