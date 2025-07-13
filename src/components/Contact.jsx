import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
   
    const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: paraRef, inView: paraInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: footer, inView: footerInView } = useInView({ triggerOnce: true, threshold: 0.2, rootMargin:'10px' });

    return (
        <div id="contact">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
                <motion.h2 
                ref={headingRef} initial={{opacity:0, y:-100}} animate={headingInView? {opacity:1, y:0}:{}} transition={{delay:0.3, duration:0.5}}
                className='text-4xl font-bold text-white'>Let's Discuss Your <span className='text-purple-500'>Project</span></motion.h2>
                <motion.p ref={paraRef} initial={{opacity:0, y:-100}} animate={paraInView? {opacity:1, y:0}:{}} transition={{delay:0.3, duration:0.5}}
                className='mt-4 text-slate-400'>
                    Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text
                </motion.p>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='my-4 text-white'>
                    <motion.div 
                    ref={containerRef} initial={{opacity:0, x:-50}} animate={containerInView? {opacity:1, x:0}:{}} transition={{delay:0.2, duration:0.5}}
                    className='flex items-center gap-4'>
                        <div className='mb-6 flex gap-2'>
                            <div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center'>
                                <FaPhone className=' text-white w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-purple-500'>Call Me</p>
                                <p className='text-white'>+91 9818160170</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    ref={containerRef} initial={{opacity:0, x:-50}} animate={containerInView? {opacity:1, x:0}:{}} transition={{delay:0.4, duration:0.5}}
                    className='flex items-center gap-4'>
                        <div className='mb-6 flex gap-2'>
                            <div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center'>
                                <FaEnvelope className=' text-white w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-purple-500'>Email</p>
                                <p className='text-white'>13881h@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                    ref={containerRef} initial={{opacity:0, x:-50}} animate={containerInView? {opacity:1, x:0}:{}} transition={{delay:0.6, duration:0.5}}
                    className='flex items-center gap-4'>
                        <div className='mb-6 flex gap-2'>
                            <div className='w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center'>
                                <FaMapMarkedAlt className=' text-white w-6 h-6' />
                            </div>
                            <div>
                                <p className='text-lg font-medium text-purple-500'>Address</p>
                                <p className='text-white'>Kundan Nagar, Laxmi Nagar, Delhi - 110092</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
{/* Form start */}
                <motion.form  action="https://formspree.io/f/myzpgerj" method="POST"
                ref={containerRef} initial={{opacity:0, x:50}} animate={containerInView? {opacity:1, x:0}:{}} transition={{delay:0.8, duration:0.5}}
                className='my-4 text-white'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input type='text' name='text' placeholder='Full Name' className='border-purple-500 bg-gray-900 p-4 rounded-md w-full' required autoComplete='off'/>
                        <input type='email' name='email' placeholder='Your Email' className='border-purple-500 bg-gray-900 p-4 rounded-md w-full' required autoComplete='off'/>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                        <input type='number' name='PhoneNumber' placeholder='Phone Number' className='border-purple-500 bg-gray-900 p-4 rounded-md w-full' required autoComplete='off'/>
                        <input type='number' name='budget' placeholder='Budget' className='border-purple-500 bg-gray-900 p-4 rounded-md w-full' required autoComplete='off'/>
                    </div>

                    <textarea placeholder='Message' name='message' className='border-purple-500 bg-gray-900 p-4 rounded-md w-full mt-4' required autoComplete='off'></textarea>
                    
                    <motion.button 
                    whileHover={{scale:1.05}} whileTap={{scale:0.95}}
                    type='submit' className='bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-200 mt-4'>Submit Message</motion.button>
                </motion.form>
            </div>
            {/* Footer */}
            <motion.div 
            ref={footer} initial={{opacity:0}} animate={footerInView? {opacity:1}:{}} transition={{delay:1, duration:0.5}}
            className='mt-28 flex justify-between items-center p-5 text-white border-t-2 border-purple-500'>
                <p>&copy; 2025. All Rights Reserved</p>
                <p>HAPPY CODING</p>
                <div className='flex justify-center gap-x-4 text-white'>
                    <a className='hover:text-purple-500'><FaFacebook className='w-6 h-6'/></a>
                    <a className='hover:text-purple-500'><FaTwitter className='w-6 h-6'/></a>
                    <a className='hover:text-purple-500'><FaLinkedin className='w-6 h-6'/></a>
                    <a className='hover:text-purple-500'><FaInstagram className='w-6 h-6'/></a>
                </div>
            </motion.div>

        </div>
    )
}

export default Contact
