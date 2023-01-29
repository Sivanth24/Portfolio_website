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
                         <h3>Netflix Clone</h3>
                         <p>The app connects you to the talented peoplearound the world. Download it from play store.</p>
                         <a href='#'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={work_2} alt='work-2' />
                    <div className='layer'>
                         <h3>Music App</h3>
                         <p>The app connects you to the talented peoplearound the world. Download it from play store.</p>
                         <a href='#'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className='work'>
                    <img src={work_3} alt='work-3' />
                    <div className='layer'>
                         <h3>Food Delivery</h3>
                         <p>The app connects you to the talented peoplearound the world. Download it from play store.</p>
                         <a href='https://sivanthsrestaurant.netlify.app'><i className="fa-solid fa-up-right-from-square"></i></a>
                    </div> 
                </div>
            </div>
            {/* <a className='btn' href='#'>See more<i className="fa-solid fa-caret-down"></i></a> */}
        </div>
    </div>
  )
}

export default Portfolio