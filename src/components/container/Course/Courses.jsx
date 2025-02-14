import React from 'react'
import { categories, courses } from '../../../Data'
import Categories from './Categories'
import Course from './Course'
import { motion } from "framer-motion"

function Courses() {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className='section' id="courses">
      <div className="text-center">
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet suscipit impedit. Consectetur, dicta eveniet! Iusto nesciunt quos consequatur modi molestiae eveniet atque neque, accusamus magni excepturi. Qui, cum at.
        </p>
      </div>
      <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className='grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-12'>
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />
        })}
      </motion.div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>

    </div>
  )
}

export default Courses
