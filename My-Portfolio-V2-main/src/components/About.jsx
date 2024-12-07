import React from 'react'
import profile from "../assets/img/IMG_0217 3.jpg"
import "./componentStyles/About.css"

export const About = () => {
  return (
    <div id='about' className='bg-[--color-bg-2] pb-[5rem]'>
        <div className='max-w-[1080px] m-auto pl-[2rem] pr-[2rem] pt-[5rem]'>
            <h2 className='font-bold text-[1.6rem] text-[--color-header] mb-[2rem]'><span className='text-[--font-mono] text-[1.2rem] bg-clip-text bg-[var(--color-gradient)]'>01.</span> ABOUT</h2>
            <div className='flex justify-between about-main'>
                <div className='max-w-[50%] flex flex-col items-start justify-start mr-[2rem] about-main2'>
                  <p className='text-left desc'>Lights, Camera, Code! Hi, I am Sri Vaishnavi and I enjoy creating the things that live on the internet. I am a passionate <span>full stack developer</span> wielding the mighty powers of the <span>MERN stack</span>, With a deep understanding of front-end and back-end technologies, and a Machine Learning enthusiast as well. I create <span>dynamic and user-friendly web applications</span> that leave a lasting impression.</p>
                  <br />
                  <p className='text-left desc'>
                  My expertise in solving <span>Data Structures and Algorithms problems using C++</span> empowers me to develop efficient and optimized solutions. I thrive on challenges and enjoy finding elegant solutions to complex coding problems.
                  </p>
                </div>
                <div className='img'>
                  <img src={"/imagess/profilee.jpg"} width={500} quality={95} alt="" className='max-w-[300px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}



// h2{
//   font-weight: bolder;
//   font-size: 1.6rem;
//   color: var(--color-header);    
//   margin-bottom: 2rem;
//   span{
//       font-family: var(--font-mono);
//       font-size: 1.2rem;
//       background-image: var(--color-gradient);
//       background-clip: text;
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//   }
// } 
