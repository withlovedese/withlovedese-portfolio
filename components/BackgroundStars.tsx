import React from 'react'
import { motion } from 'framer-motion'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
type Props = {}

const BackgroundStars = (props: Props) => {
  return (
    <motion.div className='relative flex justify-center items-center opacity-10 -z-9999'
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [2,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1]
        }}
        transition={{
            duration: 2.5
        }}
    >
        <AutoAwesomeRoundedIcon 
            className='animate-pulse absolute top-24 left-16'
            fontSize='large'
        />
        <AutoAwesomeRoundedIcon 
            className='animate-pulse absolute top-48 right-16'
            fontSize='medium'
        />
        <AutoAwesomeRoundedIcon 
            className='animate-pulse absolute top-96 right-32'
            fontSize='large'
        />
        <AutoAwesomeRoundedIcon 
            className='animate-pulse absolute top-96 left-24'
            fontSize='small'
        />
        <StarOutlineRoundedIcon 
            className='animate-ping absolute top-24'
            style={{fontSize:500}}  
        />
        <StarOutlineRoundedIcon 
            className='absolute top-36 opacity-10 animate-pulse'
            style={{fontSize:400}}  
        />
        
    </motion.div>
  )
}

export default BackgroundStars