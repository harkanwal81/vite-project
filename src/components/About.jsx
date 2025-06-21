import React from 'react';
import avtar2 from '../assets/Avatar2.png';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const About = () => {
    const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: paraRef, inView: paraInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: rightParaRef, inView: rightParaInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: stat1Ref, inView: stat1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: stat2Ref, inView: stat2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: stat3Ref, inView: stat3InView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className='text-white py-16'>
            <div className='container mx-auto px-4 text-center'>

                {/* Heading */}
                <motion.h2
                    ref={headingRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>
                    About Me
                </motion.h2>

                {/* Paragraph under heading */}
                <motion.p
                    ref={paraRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={paraInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'>
                    Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text
                </motion.p>

                {/* Image and Paragraph Side-by-Side */}
                <div className='flex flex-col md:flex-row justify-center items-center'>

                    {/* Image */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={imageInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img src={avtar2} className='w-2/3 sm:w-1/2 md:w-10/12' alt="Avatar" />
                    </motion.div>

                    {/* Right Paragraph */}
                    <motion.p
                        ref={rightParaRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={rightParaInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl text-left'>
                        Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text Lorem ipsum paragraph text
                    </motion.p>
                </div>

                {/* Statistics Section */}
                <div className='flex flex-col sm:flex-row justify-around mt-12 space-y-6 sm:space-y-0'>

                    {/* Stat 1 */}
                    <motion.div
                        ref={stat1Ref}
                        initial={{ opacity: 0 }}
                        animate={stat1InView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        className='text-center'>
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={stat1InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>
                            Years of Design Experience
                        </motion.p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        ref={stat2Ref}
                        initial={{ opacity: 0 }}
                        animate={stat2InView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.4, duration: 0.3 }}
                        className='text-center'>
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>50+</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={stat2InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.6, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>
                            Overall Global Customers
                        </motion.p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        ref={stat3Ref}
                        initial={{ opacity: 0 }}
                        animate={stat3InView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.6, duration: 0.3 }}
                        className='text-center'>
                        <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>90+</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={stat3InView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-300'>
                            Projects I have made
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
