import React, {useState} from 'react'
import {navLinks} from '../constants'
import styles from '../styles'
import {logo} from '../assets'

const Navbar:React.FC = () => {
  return (
    <nav className='w-full h-[60px] flex justify-between items-center navbar px-[72px]'>
        <img src={logo} alt='logo' className='w-[40px] h-[40px]'/>
        <ul className="list-none sm:flex hidden justify-center items-center">
            {navLinks.map((nav, index) => (
            <li className={`${styles.paragraph} mx-5 text-font hover:text-gray-300 font-semibold text-[18px] transition-all`}>
                <a href={`#${nav.id}`} className='underline-none'>{nav.title}</a>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar