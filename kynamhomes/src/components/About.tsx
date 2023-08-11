import styles from '../styles'
import {about1, about1_1} from '../assets'
const About = () => {
  return (
    <div className='w-[100%] md:px-[30px]'>
        <div className='w-[100%] flex flex-row justify-between items-center'>
            <div className='w-[50%] h-[580px] mr-10'>
                <p className={`${styles.paragraph} text-[13px] font-semibold  text-black font-oswald mb-3`}>About Us</p>
                <p className={`${styles.paragraph} text-[23px] font-medium text-black font-garamond w-[90%]`}>At KyNamHomes, we are a premier construction company comprised of the most experienced architects, project managers, and real estate agents with more than 100 years of combined expertise, based in some of the most beautiful towns of New Jersey.</p>
                <div className='w-[50%] border-b-[4px] border-[#3AB984] rounded-full mt-5 mb-10'></div>
                <img src={about1} alt='about1' className='w-[100%]'/>
            </div>
            <img src={about1_1} alt='about1_1' className='-z-10 w-[470px] h-[580px]'/>
        </div>
    </div>
  )
}

export default About