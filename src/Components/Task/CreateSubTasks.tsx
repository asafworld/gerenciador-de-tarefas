import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ManagerContext from '../../Context/ManagerContext';
import getTheDate from '../../utils/getTheDate';
import './CreateSubTasks.css';

function CreateSubTasks() {
  const [subtask, setSubtask] = useState('')
  const { presentProject,
    setPresentProject,
    projects,
    setProject,
    errorMessage,
    setErrorMessage  
  } = useContext(ManagerContext);
  const { id } = useParams();

  function concludePresent() {
    if (presentProject?.tasks) {
      const newTasks = presentProject.tasks
      presentProject.tasks[Number(id)].concluded = !presentProject.tasks[Number(id)].concluded
      presentProject.tasks[Number(id)].finishedAt = getTheDate()
      setPresentProject({
        ...presentProject,
        tasks: newTasks,
      })
    }
  }

  function concludeInProject() {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          proj.tasks[Number(id)].concluded = !proj.tasks[Number(id)].concluded
          proj.tasks[Number(id)].finishedAt = getTheDate()
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


  function updatePresent() {
    if (presentProject?.tasks) {
      const objTasks = presentProject.tasks;
      if (!objTasks[Number(id)].subtasks.toDo) {
        objTasks[Number(id)].subtasks.toDo = [subtask]
        setPresentProject({
          ...presentProject,
          tasks: objTasks,
        })
      } else {
        objTasks[Number(id)].subtasks.toDo?.push(subtask)
        setPresentProject({
          ...presentProject,
          tasks: objTasks,
        })
      }
    }
  }

  function updateProjects() {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          if (!proj.tasks[Number(id)].subtasks.toDo) {
            proj.tasks[Number(id)].subtasks.toDo = [subtask]
          } else {
            proj.tasks[Number(id)].subtasks.toDo?.push(subtask)
          }
        }
      }
      return proj;
    })
    setProject(projectTaskUpd)
    setSubtask('')
  }

  function inputsCheck() {
    if (subtask === '') {
      setErrorMessage('Preencha o campo de subtarefa');
      return false;
    }
    setErrorMessage(undefined)
    return true;
  }

  function subtaskCreator(event: React.SyntheticEvent) {
    event.preventDefault()
    if (!inputsCheck()) return false;
    updatePresent()
    updateProjects()
  }

  return(
    <article className='create-subtask-article'>
      <section className='subtask-info-section'>
        {
          presentProject?.tasks && (
            <div className='subtask-info-div'>
              <div>
                <h2>{ presentProject.tasks[Number(id)].taskLabel }</h2>
                <h4>{ presentProject.tasks[Number(id)].taskOwner }</h4>
                <p>{ presentProject.tasks[Number(id)].taskDescription }</p>
              </div>
              <div>
                <p>
                  Status: { presentProject.tasks[Number(id)].concluded ? 'Concluído!' : 'Tarefa Pendente'} 
                </p>
                <button
                  type='button'
                  className='form-control conclude-project-button'
                  onClick={ (e) => concludeTask(e) }
                >
                  { presentProject.tasks[Number(id)].concluded ? 'Reabrir Tarefa' : 'Concluir!'}
                </button>
              </div>
            </div>
          )
        }
      </section>
      <form className='create-subtask-form'>
        <input
          value={ subtask }
          placeholder='Adicione subtarefas:'
          className='create-subtask-input'
          onChange={ ({ target }) => setSubtask(target.value) }
          disabled={ presentProject?.tasks ? presentProject?.tasks[Number(id)].concluded : undefined }
        />
      </form>
      { errorMessage && (<p className="error-message">{errorMessage}</p>)}
      <button
          type="submit"
          className='form-control create-subtask-button'
          onClick={ (e) => subtaskCreator(e) }
          disabled={ presentProject?.tasks ? presentProject?.tasks[Number(id)].concluded : undefined }
        >
          Criar tarefa!
        </button>
    </article>
  )
}

export default CreateSubTasks;