import React, { useEffect, useState } from 'react'
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { navLinks } from '../../Data';
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLinks';
import { motion } from "framer-motion"

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active])

  return (
    <div className={`${active ? 'shadow-lg bg-Solitude' : ''} fixed top-0 left-0 z-20 w-full`}>
      <div>
        <div className={` ${active ? 'py-2 transition-all duration-300' : 'py-4'} container mx-auto flex items-center justify-between px-2`}>
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer "
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold ">
              Skillex
            </div>
          </div>
          <div className='sm:flex items-center hidden '>
            {
              navLinks.map((navLink) => {
                return <NavLink key={navLink.id} {...navLink} />;
              })
            }
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">Sign Up</button>
          {toggle && (
            <motion.div
              initial={{ x: -500 }}
              animate={{x: 0, opacity:1}}
              className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
              {
                navLinks.map((navLink) => {
                  return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
                })
              }
              <HiX className="absolute top-12 right-12 text-3xl cursor-pointer" onClick={() => setToggle(false)} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
