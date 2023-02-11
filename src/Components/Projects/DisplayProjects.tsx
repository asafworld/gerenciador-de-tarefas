import React, { useContext } from "react";
import ManagerContext from "../../Context/ManagerContext";
import IProject from "../../Entities/Interfaces/IProject";
import getPercentage from "../../utils/percentage";
import './DisplayProjects.css';

function DisplayProjects() {
  const { 
    projects,
    setProject,
    setPresentProject,
  } = useContext(ManagerContext);

  function mainProject(project: IProject) {
    setPresentProject(project)
  }

  function deleteProject(event: React.SyntheticEvent, id: number) {
    event.preventDefault()
    if (projects) {
      const newProjects = projects.filter((proj) => proj.projectId !== id)
      setProject(newProjects)
    }
  }
  
  return(
    <article className="display-projects-article">
      {
        !projects?.length ? (<h1 className="no-project-saved">Nenhum projeto cadastrado!</h1>) : (
          <section className="display-projects-section">
            {
              projects.map((proj: IProject) => (
                <div key={ proj.projectId } className="display-projects-div" onClick={ () => mainProject(proj) }>
                  <a href={`/project/${proj.projectId}`}>
                    <h2>{ proj.projectLabel }</h2>
                    { proj.concluded ? (<p>Concluído em {proj.finishedAt}</p>) : (<p>{ getPercentage(proj.tasks) }</p>)}
                  </a>
                  <button
                    type='button'
                    className='form-control remove-project-button'
                    onClick={ (e) => deleteProject(e, proj.projectId)}
                  >
                    Excluir
                  </button>
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