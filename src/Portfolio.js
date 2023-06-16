import React from 'react'
import './Portfolio.css'
import work_1 from './images/work-1.png'
import work_2 from './images/work-2.png'
import work_3 from './images/work-3.png'

function Portfolio() {
  return (
    <div id='portfolio'>
        <div className='container'>
            <h1 className='heading'>My Work</h1>
            <div className='work-list'>
                <div className='work'>
                    <img src={work_1} alt='work-1' /> 
                    <div className='layer'>
                         <h3>Dashboard</h3>
                         <p>This project is built using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit and Redux Toolkit Query, Node JS, Express Js, Mongoose, and MongoDB.</p>
                         <a href='https://sivanths-dashboard-project.onrender.com' target='_blank' rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={work_2} alt='work-2' /> 
                    <div className='layer'>
                         <h3>Food Delivery</h3>
                         <p>This project is built using Reactjs, Framer motion and Tailwind css</p>
                         <a href='https://sivanthsrestaurant.netlify.app' target='_blank' rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={work_3} alt='work-3' />
                    <div className='layer'>
                         <h3>Netflix Clone</h3>
                         <p>This project is built using Reactjs, Redux, Redux Toolkit and Axios for fetching data.</p>
                         <a href='https://sivanthsnetflixclone.netlify.app' target='_blank' rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            {/* <a className='btn' href='#'>See more<i className="fa-solid fa-caret-down"></i></a> */}
        </div>
    </div>
  )
}

export default Portfolio