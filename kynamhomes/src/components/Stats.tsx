import React from 'react'
import { stats_home } from '../assets'
const Stats = () => {
  return (
    <div className='relative overflow-hidden w-full h-[300px]'>
        <img src={stats_home} alt='stats-home' className='absolute w-full h-full'/>
    </div>
  )
}

export default Stats