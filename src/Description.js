import React from 'react'

const Description = ({Display}) => {
  if(Display==="skills"){
    return(
      <div className='tab-contents ' id="skills">
        <ul>
            <li><span>UI/UX</span><br/>Designing web/app interfaces</li>
            <li><span>Web development</span><br/>Web app development</li>
            <li><span>App development</span><br/>Building Android/IOS apps</li>
        </ul>
      </div>
  )} else if (Display==="experience") {
        return(
          <div className='tab-contents' id="experience">
              <ul>
                  <li><span>2015-2018</span><br/>course in ISB</li>
                  <li><span>2017-2018</span><br/>Team lead in final year project</li>
              </ul>
          </div>

  )} else {return(
      <div className='tab-contents ' id="education">
          <ul>
              <li><span>2021-2022</span><br/>Masters in Industrial Plant Engineering</li>
              <li><span>2014-2018</span><br/>B.tech in Mechanical Engineering</li>
          </ul>
      </div>
    )}
}

export default Description