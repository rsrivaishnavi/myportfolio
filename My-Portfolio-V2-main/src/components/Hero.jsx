import React from 'react'
import {motion} from "framer-motion"
import "./componentStyles/Hero.css"
import Wave from '../assets/img/Wave'

export const Hero = () => {
  return (

    <div className='flex items-center justify-center min-h-[100vh] max-w-[1080px] w-[87%] m-auto' id='hero'>
        <div className='flex flex-col justify-center  gap-[1rem]'>
            <div className='flex flex-col'>
                <div className='overflow-hidden'>
                    <h2 className='hi font-normal text-xl text-[--color-header]'>Hi, my name is</h2>
                </div>
                <div className='overflow-hidden'>
                    <h2 className='name font-semibold'>Sri Vaishnavi.</h2>
                </div>
                <div className='overflow-hidden'>
                    <h2 className='text-[3rem] name name-des font-semibold text-[#8892b0]'>I build things for the web.</h2>
                </div>
            </div>
            <Wave/>
            <div className='overflow-hidden max-w-[540px]'>
                <p className='pb-[1.5rem] tracking-widest desc'>Software engineering student by day, full stack developer by night, and a fearless freelancer in between, I am on a relentless pursuit to craft exceptional digital experiences that leave a lasting impact.</p>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1PzZfZ15_o0Hm7rQsMrxYuHlaQ8KLihjc/view?usp=sharing" target='_blank' rel="noreferrer">
                    <motion.button>My Resume</motion.button>
                </a>
            </div>
        </div>
    </div>
  )
}
