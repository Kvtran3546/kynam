import React from 'react'
import {models} from '../constants'
import Propertycard from './Propertycard'
import styles from '../styles'
const Featured = () => {
  return (
    <div className='w-full flex flex-col flex-grow justify-center items-center'>
        <p className={`${styles.paragraph} font-oswald font-semibold text-[13px] text-black mt-10`}>Featured</p>
        <h2 className={`${styles.heading2} font-garamond text-[30px] text-black font-medium`}>Our Best Works</h2>
        <p className={`${styles.paragraph} font-lato text-[16px] text-black`}>Enjoy these amazing home that has all you need to jump in!</p>
        <div className='w-full flex flex-row justify-between mt-10'>
            {models.map((model, index) => (
            <Propertycard img={model.img} buildingType={model.buildingType} price={model.price} address={model.address} bedrooms={model.bedrooms} bathrooms={model.bathrooms} sqFootage={model.sqFootage}/>
            ))}
        </div>
    </div>
  )
}

export default Featured