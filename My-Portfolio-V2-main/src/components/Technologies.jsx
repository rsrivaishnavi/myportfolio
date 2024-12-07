import React from 'react'
import { Techstack } from './Techstack'
import "./componentStyles/Technologies.css"
import { faBookOpen, faCode, faLaptopCode, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

export const Technologies = () => {

    const languages = {
        title: "LANGUAGES",
        technologies: [
            "C/C++",
            "Java",
            "Javascript",
            "HTML/CSS"
        ]
    }

    const frameworks = {
        title: "FRAMEWORKS",
        technologies: [
            "React",
            "Node.js/Express.js",
            "Django",
            "MongoDB",
            "SQL",
            "Tailwind"
        ]
    }

    const tools = {
        title: "TOOLS",
        technologies: [
            "Git/GitHub",
            "Vercel & Netlify",
            "Firebase",
            "VS Code"
        ]
    }

    const fundamentals = {
        title: "FUNDAMENTALS",
        technologies: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "DBMS",
            "Computer Networks",
            "AWS"

        ]
    }

  return (
    <div className='bg-[--color-bg-2] pb-[5rem]'>
        <div className='flex flex-col justify-center items-center w-[100%] m-auto'>
            <h3 className='mb-[4rem] text-[1.2rem] uppercase font-bold'>My skill set</h3>
            <div className='grid1'>
                <Techstack icon={faCode} title={languages.title} technologies={languages.technologies}/>
                <Techstack icon={faLaptopCode} title={frameworks.title} technologies={frameworks.technologies}/>
                <Techstack icon={faScrewdriverWrench} title={tools.title} technologies={tools.technologies} />
                <Techstack icon={faBookOpen} title={fundamentals.title} technologies={fundamentals.technologies}/>
            </div>
        </div>
    </div>
  )
}
