import styles from '../styles'
import PersonCard from './PersonCard'
import { people } from '../constants'
const Team = () => {
  return (
    <div>
        <div className='w-full flex flex-col flex-grow justify-center items-center'>
            <p className={`${styles.paragraph} font-oswald font-semibold text-[13px] text-black mt-10`}>Team</p>
            <h2 className={`${styles.heading2} font-garamond text-[30px] text-black font-medium`}>Our Company Team</h2>
            <p className={`${styles.paragraph} font-lato text-[16px] text-black`}>Meet the people that makes your dreams home!</p>
            <div className='w-full flex flex-row justify-between mt-10'>
                {people.map((people) => (
                <PersonCard img={people.img} name={people.name} title={people.title}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Team