import React from 'react'
import styles from '../styles';
import {models} from '../constants'
import DealCard from './DealCard';
const All_properties = () => {
  const listedModels = models.slice(0,6);
  return (
    <div className='flex w-full flex-col justify-center items-center px-[30px]'>
      <div className='flex flex-row md:w-[900px] lg:w-[1350px] justify-between'>
        <div>
          <h1 className={`${styles.heading1} font-garamond tracking-wide text-[40px] text-black mb-3`}>All Properties</h1>
          <p className={`${styles.paragraph} font-lato text-[20px] tracking-wide text-[#69707B]`}>Check out all of our works!</p>
        </div>
        <button className="text-black text-[20px] font-oswald hover:text-[#3AB984] hover:text-[22px] transition-all duration-500">View All</button>
      </div>
      <div className='flex flex-wrap w-full justify-center items-center'>
        {listedModels.map((model, index) =>(
          <DealCard img={model.img} property_type={model.buildingType} price={model.price} address={model.address} bedrooms={model.bedrooms} bathrooms={model.bathrooms} sqfoot={model.sqFootage}/>
        ))}
      </div>
    </div>
  )
}

export default All_properties