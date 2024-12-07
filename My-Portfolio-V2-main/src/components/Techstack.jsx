import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./componentStyles/Technologies.css"

export const Techstack = ({icon, title, technologies}) => {
  return (
    <div className='flex items-center flex-col bg-[--color-bg] pt-[2rem] stack-main pb-[2rem]'>
        <div className='bg-[--color-second] text-[--color-main] p-[1rem] icon h-[2rem] w-[2rem] flex justify-center items-center'>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </div>
        <div>
        <ul className='flex flex-col border-none justify-center items-center mt-[0rem] gap-1'>
            <li className='text-[0.9rem] mt-[0.5rem] font-semibold list'><h4 className='text-[1rem] mb-2'>{title}</h4></li>
            {
                technologies.map((technology) => {
                    return(<li key={technology}>{technology}</li>)
                    })
            }
        </ul>
        </div>

    </div>
  )
}
