import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import React from 'react'
import "./componentStyles/Contact.css"

export const Contact = () => {
  return (
    <div id="contact" className=''>
        <div className='min-h-[90vh] flex flex-col items-center justify-center w-[90%] m-auto'>
            <div className='md:mb-[80px] mb-[40px] flex flex-col items-center justify-center w-[100%]'>
                <h2 className='text-[--color-header]'><span>03. </span>CONTACT</h2>
                <p className='mt-[20px] max-w-[600px] text-center desc'>If you have any questions, ideas, collaboration opportunities, or just want to connect, feel free to get in touch with me.</p>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center w-[100%] max-w-[1080px] card'>
                <div className='flex justify-center items-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                    <p className='hover:font-bold'><a href="mailto:srivaishuravikumar2006@gmail.com">srivaishuravikumar2006@gmail.com</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                    <p className='hover:font-bold'><a href="tel:+919538314487">+91 9865911507</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaLinkedin></FaLinkedin></div>
                    <p className='hover:font-bold'><a href="https://www.linkedin.com/in/sri-vaishnavi-2a5224279/" target='_blank' rel='noreferrer'>Sri Vaishnavi</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaGithub></FaGithub></div>
                    <p className='hover:font-bold'><a href="https://github.com/rsrivaishnavi" target='_blank' rel='noreferrer'>rsrivaishnavi</a></p>
                </div>
                <div className='flex items-center justify-center gap-[1rem] mb-[2rem] w-[360px] card-sub'>
                    <div className='bg-[--color-second] h-[3rem] w-[3rem] flex items-center justify-center rounded-full'><FaInstagram></FaInstagram></div>
                    <p className='hover:font-bold'><a href="https://www.instagram.com/spirit_dancer_sri_vaishu/" target='_blank' rel='noreferrer'>Sri Vaishnavi Ravikumar</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
