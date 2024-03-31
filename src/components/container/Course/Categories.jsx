import React from 'react'
import { motion } from "framer-motion" 

function Categories({icon, category}) {
  const item = {
    hidden: {
      opacity: 0,
      y:20
    },
    visible: {
      opacity: 1,
      y: 1
    },
  };
  return (
    <motion.div
    variants={item}
    whileHover={{scale: 1.1}} 
    className='flex flex-col items-center gap-4 bg-white p-8 rouned-md flex-wrap'>
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <a href="" className='text-sm text-gray'> View More </a>
    </motion.div>
  )
}

export default Categories
