import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from 'react-scroll';

const Navbar = () => {

    const variants = {
        open: { clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: 'spring'
        },
        closed: {
            clipPath: "circle(25px at 43px 37px)",
            transition: {
                type: 'spring',
                duration: 1,
            }

        }
    }

    const [menu, setMenu] = useState(false);

    const items = [
        { id: 1, text: "About", url: 'about' },
        { id: 2, text: "Services", url: 'services' },
        { id: 3, text: "Work", url: 'work' },
        { id: 4, text: "Contact", url: 'contact' },
    ]

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='container mx-auto hidden md:flex justify-between items-center py-6'>
                <div className='text-xl lg:text-2xl font-bold flex items-center gap-1 ml-2'>
                    <span className='text-white'>Mr. Harkanwal Singh</span>
                    <span className='text-purple-500'>Portfolio</span>
                </div>
                <div>
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                        {items.map(({ id, text, url }) => {
                            return <li key={id}>
                                <Link to={url} smooth={true} duration={500} offset={10}>
                                {text}</Link>
                            </li>
                        }
                        )}
                    </ul>
                </div>
                <a href='https://drive.google.com/file/d/1doD88Y7MIO6MvicBFekd04W2kKiP4F0D/view?usp=sharing' className='md:text-base lg:text-md bg-purple-500 hover:bg-purple-400 text-white px-6 py-2 rounded-full mr-2' target='_blank'>Download CV</a>
            </motion.div>

            <div className='flex md:hidden justify-between'>
                <motion.div animate={menu ? "open" : "closed"}>
                    <motion.div
                        variants={variants}
                        onClick={() => { setMenu((prev) => !prev) }}
                        className='bg-white w-2/3 h-screen text-black fixed z-10'>
                        <div className='px-7 py-6'>{menu ? <IoClose size={30} /> : <AiOutlineMenu size={30} />}</div>
                        {menu && (
                            <div className='flex flex-col justify-center items-center'>
                                <ul className='space-y-6 text-black text-lg'>
                                    {items.map(({ id, text, url }) => {
                                        return <li key={id} className='hover:text-purple-500 duration-200 cursor-pointer'>
                                            <Link to={url} smooth={true} duration={500} offset={-70}>
                                            {text}</Link>
                                        </li>
                                    })}
                                </ul>
                                <a href='https://drive.google.com/file/d/1doD88Y7MIO6MvicBFekd04W2kKiP4F0D/view?usp=drive_linkhttps://drive.google.com/file/d/1doD88Y7MIO6MvicBFekd04W2kKiP4F0D/view?usp=sharing' target='_blank' 
                                className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full mt-6'>Download CV</a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
                    <span className='text-white'>Mr. Singh</span>
                    <span className='text-purple-500'>Portfolio</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar
