import React from 'react'
import styles from '../styles'
const Intro = () => {
  return (
    <div className='w-full lg:h-[900px] md:h-[400px] flex flex-col justify-center items-center'>
        <h1 className={`${styles.heading1} text-[42px] text-[#FFF] font-normal`}>
            A PLACE TO CALL HOME
        </h1>
        <h2 className={`${styles.heading2} text-[#FFF] text-[15px] font-normal uppercase italic`}>
            You dream it, We build it
        </h2>
    </div>
  )
}

export default Intro