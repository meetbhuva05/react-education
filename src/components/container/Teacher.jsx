import React from 'react'
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from '../../Data';
import Accordion from './Accordion';
import { motion } from "framer-motion"

function Teacher() {
  return (
    <div className='section' id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal"> An Instructor </span> <br />
            of Our platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae incidunt officia excepturi, vel velit, reiciendis nisi omnis architecto blanditiis repellat non aliquam dolor fuga totam? Ipsum nostrum autem fugit laborum!
          </p>
          <button className="py-3 px-4 text-white bg-Teal rounded-lg text-sm font-bold">Start Teaching</button>
        </div>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{
            x: 0
          }}
          transition={{ duration: 0.5 }}
          className="p-4 md:w-3/4 sm:row-start-1" >
          <img src={teacher1} alt="" />
        </motion.div>

        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal"> An Instructor </span> <br />
            of Our platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae incidunt officia excepturi, vel velit, reiciendis nisi omnis architecto blanditiis repellat non aliquam dolor fuga totam? Ipsum nostrum autem fugit laborum!
          </p>
          <button className="py-3 px-4 text-white bg-Teal rounded-lg text-sm font-bold">Get Started</button>
        </div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{
            x: 0
          }}
          transition={{ duration: 0.5 }}
          className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </motion.div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className='text-Teal'> Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  )
}

export default Teacher
