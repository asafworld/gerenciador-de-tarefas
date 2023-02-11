import React, { useContext } from "react";
import ManagerContext from "../../Context/ManagerContext";
import CreateTask from "../../Components/ProjectTasks/CreateTask";
import DisplayTasks from "../../Components/ProjectTasks/DisplayTasks";
import getPercentage from "../../utils/percentage";
import Header from "../../Components/Header/Header";
import getTheDate from "../../utils/getTheDate";
import './Project.css';

function Project() {
  const { presentProject, setPresentProject, projects, setProject } = useContext(ManagerContext);

  function concludePresent() {
    if (presentProject?.tasks) {
      setPresentProject({
        ...presentProject,
        concluded: !presentProject.concluded,
        finishedAt: getTheDate()
      })
    }
  }

  function concludeInProject() {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          proj.concluded = !proj.concluded
          proj.finishedAt = getTheDate()
        }
        
      }
      return proj;
    })
    setProject(projectTaskUpd)
  }

  function concludeTask(event: React.SyntheticEvent) {
    event.preventDefault()
    concludePresent()
    concludeInProject()
  }
  

  return(
    <article>
      <Header />
      <section className="project-info-section">
        <div className="project-info-divs">
          <h1>{ presentProject?.projectLabel }</h1>
          <p>{ presentProject?.description }</p>
        </div>
        { !presentProject?.concluded && <h4>{ getPercentage(presentProject?.tasks) }</h4>}
        <div className="project-info-divs">
          <h3>
            Status: { presentProject?.concluded ? 'Concluído!' : 'Projeto Pendente'} 
          </h3>
          <button
            type='button'
            className="form-control conclude-project-button"
            onClick={ (e) => concludeTask(e) }
          >
            { presentProject?.concluded ? 'Reabrir Projeto' : 'Concluir!'}
          </button>
        </div>
      </section>
      <section>
        <CreateTask />
        <DisplayTasks />
      </section>
    </article>
  )
}

export default Project;