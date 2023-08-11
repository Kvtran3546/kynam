import React, {useState} from 'react'
import styles from '../styles'
import { chevron_down } from '../assets';
import {home} from '../assets';
    interface IntroProps {
        body_ref: React.RefObject<HTMLHeadingElement>;
    }
  
  const Intro: React.FC<IntroProps> = ({ body_ref }) => {
    const [hovered, arrowHovered] = useState(false);
    const handleMouseEnter = () => {
        arrowHovered(true);
      };
    
      const handleMouseLeave = () => {
        arrowHovered(false);
      };
      const handleClick = () => {
        if(body_ref.current){
            body_ref.current.scrollIntoView({behavior: 'smooth'});
        }
      };
  return (
    <div className='relative w-full lg:h-[93%] md:h-[93%] h-[93%] flex flex-col justify-center items-center'>
        <img src={home} alt='home' className='absolute lg:top-0 md:top-0 -z-10 w-full h-full object-cover'/>
        <h1 className={`${styles.heading1} lg:text-[60px] md:text-[42px] text-[#FFF] font-normal`}>
            A PLACE TO CALL HOME
        </h1>
        <h2 className={`${styles.heading2} lg:text-[30px] md:text-[15px]  font-normal uppercase italic text-[#FFF] lg:mt-10`}>
            You dream it, We build it
        </h2>
        <div className='w-full flex justify-center items-center'>
            <img src={chevron_down} alt='arrow_down' className='absolute bottom-10 scale-[3] transition-all ease-in-out duration-500 z-30' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
            <img src={chevron_down} alt='arrow_down' className={`absolute ${hovered? "bottom-5 scale-[2]": "bottom-10 scale-[3]"} transition-all ease-in-out duration-500 z-20`}/>
            <img src={chevron_down} alt='arrow_down' className={`absolute ${hovered? "bottom-1 scale-[1.5]": "bottom-10 scale-[3]"} transition-all ease-in-out duration-500 z-10`}/>
        </div>
    </div>
  )
}

export default Intro