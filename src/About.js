import React, { useState } from "react";
import "./About.css";
import Description from "./Description";
import User_img from "./files/user.png";

function About() {
  const [display, setDisplay] = useState("skills");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={User_img} alt="user" />
          </div>
          <div className="about-col-2">
            <h1 className="heading">About Me</h1>
            <p>
              Frontend developer with 3+ years of professional experience
              building responsive and user-friendly websites. I have experience
              working with HTML, CSS, JavaScript, Typescript, React, Angular,
              Redux, REST API, Axios and modern CSS frameworks like Bootstrap,
              Tailwind CSS, SASS, and LESS. I have good knowledge of Next.JS,
              and Node.js. I have experience collaborating with a team and
              delivering the best results in the given time frame.
            </p>
            <div className="tab-titles">
              <p
                className={
                  display === "skills" ? "active-link tab-links" : "tab-links"
                }
                onClick={() => setDisplay("skills")}
              >
                Skills
              </p>
              <p
                className={
                  display === "experience"
                    ? "active-link tab-links"
                    : "tab-links"
                }
                onClick={() => setDisplay("experience")}
              >
                Experience
              </p>
              <p
                className={
                  display === "education"
                    ? "active-link tab-links"
                    : "tab-links"
                }
                onClick={() => setDisplay("education")}
              >
                Education
              </p>
            </div>
            <Description Display={display} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
