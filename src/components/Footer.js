import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/vijeth-poojari-a84272229/">
              <LinkedInIcon /></a>
              <a href="https://github.com/vijethpoojary85">
              <GithubIcon />
            </a>
      </div>
    </div>
  );
}

export default Footer;
