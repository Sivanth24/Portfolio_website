import React, {useState} from 'react'
import './About.css'
import Description from './Description'
import User_img from './images/user.png'


function About() {

const [display,setDisplay] = useState("skills")

  return (
    <div id='about'>
        <div className='container'>
            <div className='row'>
                <div className='about-col-1'>
                    <img src={User_img} alt='user' />
                </div>
                <div className='about-col-2'>
                    <h1 className='heading'>About Me</h1>
                    <p>Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and for software development, I attended a 1000+ hour coding bootcamp to learn new languages while sharpening existing skills. Ready to apply my passion for coding to a talented engineering team to develop quality solutions.</p>
                    <div className='tab-titles'>
                        <p className= {display === "skills" ? "active-link tab-links" : "tab-links"} onClick={()=> setDisplay("skills")} >Skills</p>
                        <p className={display === "experience" ? "active-link tab-links" :"tab-links"} onClick={()=> setDisplay("experience")} >Experience</p>
                        <p className={display === "education" ? "active-link tab-links" : "tab-links"} onClick={()=> setDisplay("education")}>Education</p>
                    </div>
                    <Description Display={display} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About