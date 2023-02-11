import React from "react";
import CreateProject from "../../Components/Projects/CreateProject";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import './Projects.css';

function Projects() {
  return(
    <article className="projects-article">
      <div className="header-div">
        <h1>GERENCIADOR DE TAREFAS</h1>
      </div>
      <CreateProject />
      <DisplayProjects />
    </article>
  )
}

export default Projects;