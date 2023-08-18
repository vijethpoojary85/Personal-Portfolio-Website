import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>description:</b> {project.description}
      </p>
      <a href="https://github.com/vijethpoojary85">
              <GitHubIcon />
            </a>
    </div>
  );
}

export default ProjectDisplay;
