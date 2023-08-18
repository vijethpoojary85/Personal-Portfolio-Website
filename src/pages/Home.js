import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ResumeIcon from "@material-ui/icons/Description";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vijeth Poojari</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vijeth-poojari-a84272229/">
              <LinkedInIcon />
            </a>
            <a href="mailto:your.vijethpoojary225@gmail.com">
              <EmailIcon />
            </a>
            <a href="https://github.com/vijethpoojary85">
              <GithubIcon />
            </a>
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:fe2fe2ee-b4ac-358f-8381-70fa2852620a" target="_blank" rel="noopener noreferrer">
              <ResumeIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, JavaScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL, PHP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java, Python, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
