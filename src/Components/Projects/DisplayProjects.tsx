import React, { useContext } from "react";
import ManagerContext from "../../Context/ManagerContext";
import IProject from "../../Entities/Interfaces/IProject";

function DisplayProjects() {
  const { projects } = useContext(ManagerContext);

  return(
    <article>
      {
        !projects?.length ? (<h1>Nenhum projeto cadastrado!</h1>) : (
          <section>
            {
              projects.map((proj: IProject) => (
                <div>
                  <a href={`/project/${proj.projectId}`}>
                    <h2>{ proj.projectLabel }</h2>
                    <p>{ proj.percent }</p>
                  </a>
                </div>
              ))
            }
          </section>
        )  
      }
    </article>
  )
}

export default DisplayProjects;