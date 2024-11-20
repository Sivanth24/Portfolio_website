import React from "react";

const Description = ({ Display }) => {
  if (Display === "skills") {
    return (
      <div className="tab-contents " id="skills">
        <ul>
          <li>
            <span>Web Technologies</span>
            <br />
            HTML5, CSS3, Bootstrap, Tailwind, SCSS/SASS, JavaScript, TypeScript,
            React, React Native, Angular, Next.JS, Redux, REST API and Axios
          </li>
          <li>
            <span>Version Control</span>
            <br />
            Git, Bitbucket, SVN
          </li>
          <li>
            <span>Deployment Tools</span>
            <br />
            AWS, Appstore, Playstore
          </li>
          <li>
            <span>Debugging Tools</span>
            <br />
            Firebug, Chrome Developer toolbar, IE Developer Toolbar
          </li>
          <li>
            <span>Database</span>
            <br />
            MySQL, MongoDB
          </li>
          <li>
            <span>Agile Tools</span>
            <br />
            JIRA
          </li>
        </ul>
      </div>
    );
  } else if (Display === "experience") {
    return (
      <div className="tab-contents" id="experience">
        {/* <ul>
          <>
            <li>
              <span>2023-Present</span>
              <br />
              <p>Storelink S.R.L - Rome,Italy.</p>
            </li>
            <ul className="exp-content">
              <li>
                Developed a Video Conferencing web application using Angular,
                enhancing its overall performance and user experience.
              </li>
              <li>
                Integrated Material UI components seamlessly into a desktop
                application, contributing to a more polished and visually
                appealing user interface.
              </li>
              <li>
                Employed react-hook-form to streamline the management of
                intricate forms, ensuring efficient data handling and improving
                overall performance in the application.
              </li>
              <li>
                Spearheaded the development of an engaging and interactive
                mobile application using React Native and JavaScript,
                emphasizing a user-friendly and responsive design for optimal
                mobile experience.
              </li>
            </ul>
          </>

          <>
            <li>
              <span>2022-2023</span>
              <br />
              <p>Freelance Frontend Developer - Online.</p>
            </li>
            <ul className="exp-content">
              <li>
                Developed user-friendly Web Applications using HTML, CSS,
                Javascript, React, and Redux.
              </li>
              <li>
                Experience in Building and maintaining Single Page Applications
                (SPA) in React.
              </li>
              <li>
                Participated in Project planning from early design concepts to
                structuring and developing projects.
              </li>
              <li>
                Used ECMAScript (ES6), and JSX in React for developing Reusable
                components.
              </li>
              <li>Designed multiple dynamic and browser-compatible pages.</li>
            </ul>
          </>

          <>
            <li>
              <span>2019-2021</span>
              <br />
              <p>
                ORBINET TECHNOLOGIES PVT LTD - Frontend Developer, Bangalore,
                India.
              </p>
            </li>
            <ul className="exp-content">
              <li>
                Developed Frontend web applications using HTML5, CSS3,
                Bootstrap, SCSS, Tailwind, TypeScript, and React.
              </li>
              <li>
                Integrated Redux Framework with React to handle large chunks of
                data, and state management for performance optimization.
              </li>
              <li>
                Experience in using Databases like MongoDB and MySQL to access
                data using valid queries.
              </li>
              <li>
                Worked through software development life cycle for gathering
                user requirements and building applications to their
                requirements.
              </li>
              <li>
                Optimized components for maximum performance across various
                devices and browsers.
              </li>
            </ul>
          </>
        </ul> */}
      </div>
    );
  } else {
    return (
      <div className="tab-contents " id="education">
        <ul>
          <li>
            <span>2021-2022</span>
            <br />
            <p style={{ cursor: "pointer", marginTop: "10px" }}>
              Masters in Industrial Plant Engineering
            </p>
          </li>
          {/* <li><span>2014-2018</span><br/><p style={{cursor: 'pointer', marginTop: '10px'}}>B.tech in Mechanical Engineering</p></li> */}
        </ul>
      </div>
    );
  }
};

export default Description;
