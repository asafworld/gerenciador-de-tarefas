import React, { useContext } from 'react';
import ManagerContext from '../../Context/ManagerContext';
import './DisplayTasks.css';

function DisplayTasks() {
  const { presentProject, setPresentProject, projects, setProject } = useContext(ManagerContext);
  
  function removeFromPresent(id: number) {
    if (presentProject?.tasks) {
      const newTasks = presentProject.tasks.filter((task) => task.taskId !== id )
      setPresentProject({
        ...presentProject,
        tasks: newTasks
      })
    }
  }

  function removeFromProjects(id: number) {
    if (presentProject) {
      console.log('entrou 1');
      const newProj = projects?.map((proj) => {
        if (proj.projectId === presentProject.projectId) {
          if (proj.tasks) {
            const newTask = proj.tasks.filter((task) => task.taskId !== id)
            proj.tasks = newTask
          }
        }
        console.log(proj);
        return proj
      })
      console.log(newProj);
      setProject(newProj)
    }
    console.log('saiu');
  }
  
  function removeTask(event: React.SyntheticEvent, id: number) {
    event.preventDefault()
    removeFromPresent(id)
    removeFromProjects(id)
  }

  return(
    <article className="display-tasks-article">
      {
        !presentProject?.tasks ? (<h1 className='no-task-saved'>Nenhuma tarefa registrada!</h1>) : (
          <section className='display-tasks-section'>
            {
              presentProject.tasks.map((proj) => (
                <div key={proj.taskId} className='display-tasks-div'>
                  <a href={`/task/${proj.taskId}`}>
                    <h2>{ proj.taskLabel }</h2>
                    <p>{ proj.taskDescription }</p>
                    <p>{ proj.taskOwner }</p>
                    { proj.concluded && (<p>Concluído em: {proj.finishedAt}</p>) }
                  </a>
                  <button
                    type='button'
                    className='form-control remove-task-button'
                    onClick={ (e) => removeTask(e, proj.taskId)}
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

export default DisplayTasks;