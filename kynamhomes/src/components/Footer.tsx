import { footerLinks } from '../constants'
import styles from '../styles'
import {logo} from '../assets'
const Footer = () => {
  return (
    <div className='flex flex-row bg-[#469E79] w-full justify-center pt-[60px] lg:px-[125px] pb-[30px] md:px-[10px]'>
        <div className='flex flex-col items-start w-[40%] mr-[30px] lg:pr-[200px]'>
            <img src={logo} alt='logo' className='w-[35px] h-[30px]' />
            <h1 className={`${styles.heading1} text-[20px] font-poppins`}>KyNamHomes</h1>
            <p className={`${styles.paragraph} text-gray-200 text-[14px] font-lato tracking-wide mt-2`}>What sets KyNamHomes apart is our youthful energy and hunger for excellence. As a dynamic construction company, we embrace innovation and constantly seek new ways to enhance our craft.</p>
        </div>
        {footerLinks.map((link) => (
            <div className='flex flex-col items-start w-[10%] mr-[20px]'>
                <h2 className={`${styles.heading2} font-oswald text-[13px] leading-[25px] uppercase`}>{link.title}</h2>
                {link.links.map((item) => (
                    <a href={item.link} className='text-gray-200 text-[14px] leading-[25px] font-lato mt-[4px] '>{item.name}</a>
                ))}
            </div>
        ))}
        <div className='flex flex-col items-start w-[10%] mr-[20px]'>
            <h2 className={`${styles.heading2} font-oswald text-[13px] leading-[25px] uppercase`}>Contact</h2>
            <p className='text-gray-200 text-[14px] leading-[25px] font-lato mt-[4px]'>234 Willow<br/>Morris Town, NJ</p>
            <p className='text-gray-200 text-[14px] leading-[25px] font-lato mt-[4px]'>1-800 222-2222</p>
            <a href='kynamehomes.com' className='text-gray-200 text-[14px] leading-[25px] font-lato mt-[4px]'>KyNamHomes.com</a>
        </div>
    </div>
  )
}

export default Footer