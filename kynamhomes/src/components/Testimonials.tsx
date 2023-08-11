import styles from '../styles'

const Testimonials = () => {
  return (
    <div className='w-full border-y-[2px] border-[#CBD2DE]'>
        <div className='flex flex-col justify-center items-center py-[50px] px-[200px]'>
            <h1 className={`text-black ${styles.heading1} text-[13px] font-semibold font-poppins uppercase tracking-wide`}>Testimonials</h1>
            <p className={`${styles.paragraph} text-black text-[28px] font-semi font-garamond tracking-wide text-center mt-2`}>"KyNamHomes took us from the hand from the beginning to the end, totally recommendable will but again with them"</p>
            <div className='flex border-b-[3px] border-[#3AB984] w-[50%] my-5 rounded-full'/>
            <p className={`${styles.paragraph} text-black font-poppins uppercase font-medium text-[13px]`}>ALAN LOPEZ, BUYER</p>
        </div>
        
    </div>
  )
}

export default Testimonials