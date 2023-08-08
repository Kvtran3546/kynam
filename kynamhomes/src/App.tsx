import { useState, useRef } from 'react'
import './App.css'
import {Navbar, Body, Intro, Footer} from './components'
import {home} from './assets'


function App() {
  const Body_ref = useRef<HTMLHeadingElement>(null);
  return (
    <div className='relative flex flex-col w-full'>
      <div className='relative z-20 bg-[#FFFFFF] w-full'>
        <Navbar/>
      </div>
      <div className='relative z-10 w-full'>
        <Intro body_ref={Body_ref} />
      </div>
      <div ref={Body_ref} className='relative w-full'>
        <Body/>
      </div>
      <div className='relative w-full mt-20'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
