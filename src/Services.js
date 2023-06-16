import React from 'react'
import './Services.css'

function Services() {
  return (
    <div id='services'>
        <div className='container'>
            <h1 className='heading'>My Services</h1>
            <div className='services-list'>
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p>Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored.</p>
                    {/* <a href='#'>Learn more</a> */}
                </div>
                <div>
                    <i className="fa-solid fa-crop"></i>
                    <h2>UI/UX Design</h2>
                    <p>Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored.</p>
                    {/* <a href='#'>Learn more</a> */}
                </div>
                <div>
                    <i className="fa-brands fa-app-store"></i>
                    <h2>App Design</h2>
                    <p>Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored.</p>
                    {/* <a href='#'>Learn more</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services