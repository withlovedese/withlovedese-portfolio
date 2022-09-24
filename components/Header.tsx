import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex items-start justify-between sticky top-0 max-w-7xl mx-auto z-9999 md:items-center'>
        {/* Social Icons */}
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }} 
        animate={{
            x:0,
            opacity: 1,
            scale:1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            <SocialIcon url='https://www.linkedin.com/in/adesemicelumaro/' fgColor='#edf7fc' bgColor='transparent'/>
            <SocialIcon url='https://twitter.com/withlovedese' fgColor='#edf7fc' bgColor='transparent'/>
            <SocialIcon url='https://www.youtube.com/channel/UCmuTrRe2fdD81PWsWF5I58Q' fgColor='#edf7fc' bgColor='transparent'/>
            <SocialIcon url='https://github.com/withlovedese' fgColor='#edf7fc' bgColor='transparent'/>
            <SocialIcon url='https://www.instagram.com/withlovedese/' fgColor='#edf7fc' bgColor='transparent'/>

        </motion.div>

        {/* Contact me  */}
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }} 
        animate={{
            x:0,
            opacity: 1,
            scale:1
        }}
        transition={{
            duration: 2,
        }}
         className='flex items-center text-sm font-semibold text-blue-1 cursor-pointer'>
            <SocialIcon
             className='cursor-pointer'
             network='email'
             fgColor='#edf7fc'
             bgColor='transparent'
             />
             <p className='hidden md:inline-flex'>Hit me up!</p>
        </motion.div>
    </header>
  )
}

export default Header