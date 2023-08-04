import React from 'react'
import styles from '../styles'
import { professional1, professional1_1 } from '../assets'
const Professional = () => {
  return (
    <div className='w-[100%] md:px-[30px]'>
        <div className='w-[100%] flex flex-row justify-between items-center'>
            <img src={professional1} alt='prof1' className='-z-10 w-[470px] h-[580px] object-cover'/>
            <div className='w-[50%] h-[580px] ml-10'>
                <img src={professional1_1} alt='prof1-1' className='w-[100%]'/>
                <p className={`${styles.paragraph} text-[13px] font-semibold  text-black font-oswald mt-5`}>Properties</p>
                <p className={`${styles.paragraph} text-[26px] font-medium text-black font-garamond w-[90%] mt-5`}>We have the property you are looking for, just let us know your requirements.</p>
                <div className='w-[50%] border-b-[4px] border-[#3AB984] rounded-full mt-5 mb-5'></div>
                <p className={`${styles.paragraph} text-[16px] font-medium text-black font-lato w-[100%]`}>Our team of dedicated professionals is passionate about delivering personalized service that goes above and beyond. We understand that building your dream home is a significant milestone, and we are here to support you every step of the way.</p>
            </div>
        </div>
    </div>
  )
}

export default Professional