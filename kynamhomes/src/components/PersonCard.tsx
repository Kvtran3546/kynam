import React from 'react'
import styles from '../styles';
interface PersonProp {
    img: string;
    name: string;
    title: string;
}
const PersonCard: React.FC<PersonProp> = ({img, name, title}) => {
  return (
    <div className='relative w-[320px] h-[380px] mx-1 flex justify-center items-end'>
        <img src={img} alt= "Person" className='absolute top-0 -z-10 w-[350px] h-[380px] object-cover'/>
        <div className='w-[264px] flex flex-col justify-center items-center bg-white border-l-[4px] border-[#3AB984] rounded-sm mb-5'>
            <h1 className={`${styles.heading1} text-[22px] font-garamond text-black tracking-wider`}>{name}</h1>
            <div className='border-b-[3px] w-[30%] border-[#3AB984] rounded-md'></div>
            <p className={`${styles.paragraph} text-[#69707B] text-[13px] font-oswald font-semibold my-2`}>{title}</p>
        </div>
    </div>
  )
}

export default PersonCard