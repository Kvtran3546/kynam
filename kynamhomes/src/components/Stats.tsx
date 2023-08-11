import { stats_home } from '../assets'
import styles from '../styles'
const Stats = () => {
  return (
    <div className='relative overflow-hidden w-full h-[300px]'>
        <img src={stats_home} alt='stats-home' className='absolute w-full h-full object-cover -z-10'/>
        <div className='w-full h-full bg-[#3AB984] bg-opacity-[.90] px-[100px] flex flex-row justify-center items-center'>
            <div className='w-auto flex flex-col justify-center items-center px-[10px] lg:w-[300px] lg:mx-[30px]'>
                <h1 className={`${styles.heading1} text-[42px] font-oswald font-medium flex justify-center items-center`}>
                    <span className='text-[26px]'>$</span>390<span className='text-[35px]'>M</span>
                </h1>
                <h2 className='font-garamond text-center text-[21px] tracking-wider my-3'>
                    Property Sales
                </h2>
                <p className='font-lato text-center font-normal tracking-wide text-[16px]'>
                    Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.
                </p>
            </div>
            <div className='w-auto flex flex-col justify-center items-center px-[10px] lg:w-[300px] lg:mx-[30px]'>
                <h1 className={`${styles.heading1} text-[42px] font-oswald font-medium flex justify-center items-center`}>
                    <span className='text-[26px]'>+</span>1,290
                </h1>
                <h2 className='font-garamond text-center text-[21px] tracking-wider my-3'>
                    Active Listings
                </h2>
                <p className='font-lato text-center font-normal tracking-wide text-[16px]'>
                    Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.
                </p>
            </div>
            <div className='w-auto flex flex-col justify-center items-center px-[10px] lg:w-[300px] lg:mx-[30px]'>
                <h1 className={`${styles.heading1} text-[42px] font-oswald font-medium flex justify-center items-center`}>
                    210<span className='text-[35px]'>x</span>
                </h1>
                <h2 className='font-garamond text-center text-[21px] tracking-wider my-3'>
                    Revenue Growth
                </h2>
                <p className='font-lato text-center font-normal tracking-wide text-[16px]'>
                    Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Stats