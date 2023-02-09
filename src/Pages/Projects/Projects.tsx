import React from "react";
import CreateProject from "../../Components/Projects/CreateProject";
import DisplayProjects from "../../Components/Projects/DisplayProjects";

function Projects() {
  return(
    <article>
      <CreateProject />
      <DisplayProjects />
    </article>
  )
}

export default Projects;