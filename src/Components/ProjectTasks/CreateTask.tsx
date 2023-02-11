import React, { useState, useContext } from "react";
import ManagerContext from "../../Context/ManagerContext";
import ITask from "../../Entities/Interfaces/ITask";
import getTheDate from "../../utils/getTheDate";
import './CreateTask.css';

function CreateTask() {
  const [taskLabel, setTask] = useState('');
  const [taskOwner, setOwner] = useState('');
  const [taskDescription, setDescription] = useState('');
  const { presentProject,
    setPresentProject,
    projects,
    setProject,
    errorMessage,
    setErrorMessage
  } = useContext(ManagerContext)

  function updatePresentProject(newTask: ITask) {
    if (presentProject?.tasks) {
      setPresentProject({
        ...presentProject,
        tasks: [...presentProject.tasks, newTask]
      })
    } else {
      if (presentProject) {
        const newProj = { ...presentProject, tasks: [newTask] }
        setPresentProject(newProj)
      }
    }
  }

  function updateProjectList(newTask: ITask) {
    const projectsUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          proj = {
            ...proj,
            tasks: [...proj.tasks, newTask]
          };
        } else {
          proj = {
            ...proj,
            tasks: [newTask]
          };
        }
      }
      return proj;
    })
    setProject(projectsUpd)
  }

  function inputsCheck() {
    if (
      taskLabel === ''
      || taskDescription === ''
      || taskOwner === ''
    ) {
      setErrorMessage('Preencha todos os campos informativos da tarefa.');
      return false;
    }
    setErrorMessage(undefined)
    return true;
  }
  
  function taskCreator(event: React.SyntheticEvent) {
    event.preventDefault()
    if (!inputsCheck()) return false
    const index = presentProject?.tasks?.length;
    const date = getTheDate()
    const newTask = {
      taskId: index ? index : 0,
      taskLabel,
      taskDescription,
      taskOwner,
      createdAt: date,
      finishedAt: null,
      concluded: false,
      subtasks: {
        toDo: null,
        concluded: null,
      }
    }
    console.log(newTask);
    updatePresentProject(newTask)
    updateProjectList(newTask)
  }

  return(
    <article>
      <form className="create-task-form">
        <input
          value={ taskLabel }
          className="create-task-input"
          placeholder="Identifique a tarefa:"
          disabled={presentProject?.concluded}
          onChange={ ({ target }) => setTask(target.value) }
        />
        <input
          value={ taskOwner }
          className="create-task-input"
          placeholder="Usuário responsável:"
          disabled={presentProject?.concluded}
          onChange={ ({ target }) => setOwner(target.value) }
        />
        <textarea
          value={ taskDescription }
          placeholder="Descrição da tarefa:"
          className="create-task-textarea"
          rows={3}
          disabled={presentProject?.concluded}
          onChange={ ({ target }) => setDescription(target.value)}
        />
        { errorMessage && (<p className="error-message">{errorMessage}</p>)}
        <button
          type="submit"
          className="form-control create-task-button"
          onClick={ (e) => taskCreator(e) }
          disabled={presentProject?.concluded}
        >
          Criar tarefa!
        </button>
      </form>
    </article>
  )
}

export default CreateTask;