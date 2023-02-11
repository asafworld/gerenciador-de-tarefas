import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ManagerContext from '../../Context/ManagerContext';
import './DisplaySubTask.css';

function DisplaySubTasks() {
  const [subtasks, setSubs] = useState<string[] | null>()
  const [concluded, setConcluded] = useState<string[] | null>()
  const { presentProject,
    setPresentProject,
    projects,
    setProject,  
  } = useContext(ManagerContext);
  const { id } = useParams();

  useEffect(() => {
    if (presentProject?.tasks) {
      setSubs(presentProject.tasks[Number(id)].subtasks.toDo)
      setConcluded(presentProject.tasks[Number(id)].subtasks.concluded)
    }
  }, [presentProject])

  function removeFromPresentToDo(task: string) {
    if (presentProject?.tasks) {
      const objTasks = presentProject.tasks;
      if (objTasks[Number(id)].subtasks.toDo) {
        const newArr = objTasks[Number(id)].subtasks.toDo?.filter((sub) => sub !== task)
        if (newArr) {
          objTasks[Number(id)].subtasks.toDo = newArr
        }
        setPresentProject({
          ...presentProject,
          tasks: objTasks,
        })
      }
    }
  }

  function addToPresentConcluded(task: string) {
    if (presentProject?.tasks) {
      const objTasks = presentProject.tasks;
      if (objTasks[Number(id)].subtasks.concluded) {
        objTasks[Number(id)].subtasks.concluded?.push(task)
      } else {
        objTasks[Number(id)].subtasks.concluded = [task]
      }
      setPresentProject({
        ...presentProject,
        tasks: objTasks,
      })
    }
  }
  
  function removeFromProjectsToDo(task: string) {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          if (proj.tasks[Number(id)].subtasks.toDo) {
            const newObj = proj.tasks[Number(id)].subtasks.toDo?.filter((pj) => pj !== task)
            if (newObj) {
              proj.tasks[Number(id)].subtasks.toDo = newObj
            }
          }
        }
      }
      return proj;
    })
    setProject(projectTaskUpd)
  }

  function addToProjectsConcluded(task: string) {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          if (proj.tasks[Number(id)].subtasks.concluded) {
            proj.tasks[Number(id)].subtasks.concluded?.push(task)
          } else {
            proj.tasks[Number(id)].subtasks.concluded = [task]
          }
        }
      }
      return proj;
    })
    setProject(projectTaskUpd)
  }

  function concludeTask(event: React.SyntheticEvent, task: string) {
    event.preventDefault()
    removeFromPresentToDo(task)
    addToPresentConcluded(task)
    removeFromProjectsToDo(task)
    addToProjectsConcluded(task)
  }

  function deletePendingSubtask(event: React.SyntheticEvent, task: string) {
    event.preventDefault()
    removeFromPresentToDo(task)
    removeFromProjectsToDo(task)
  }

  function removeFromPresentConcluded(task: string) {
    if (presentProject?.tasks) {
      const objTasks = presentProject.tasks;
      if (objTasks[Number(id)].subtasks.concluded) {
        const newArr = objTasks[Number(id)].subtasks.concluded?.filter((sub) => sub !== task)
        if (newArr) {
          objTasks[Number(id)].subtasks.concluded = newArr
        }
        setPresentProject({
          ...presentProject,
          tasks: objTasks,
        })
      }
    }
  }

  function removeFromProjectsConcluded(task: string) {
    const projectTaskUpd = projects?.map((proj) => {
      if (proj.projectId === presentProject?.projectId) {
        if (proj.tasks) {
          if (proj.tasks[Number(id)].subtasks.concluded) {
            const newObj = proj.tasks[Number(id)].subtasks.concluded?.filter((pj) => pj !== task)
            if (newObj) {
              proj.tasks[Number(id)].subtasks.concluded = newObj
            }
          }
        }
      }
      return proj;
    })
    setProject(projectTaskUpd)
  }

  function deleteConcludedSubtask(event: React.SyntheticEvent, task: string) {
    event.preventDefault()
    removeFromPresentConcluded(task)
    removeFromProjectsConcluded(task)
  }
  
  return(
    <article className='display-subtasks-article'>
      {
        !subtasks ? (<h3 className='no-subtask'>Nenhuma subtarefa pendente</h3>) : (
          <section className='display-subtasks-pending-section'>
            <h3>Pendentes</h3>
            <ul>
              {
                subtasks.map((st) => (
                  <div className='display-subtasks-pending-li' >
                    <FontAwesomeIcon icon={faSquareMinus} onClick={ (e) => concludeTask(e, st)}/>
                    <li key={st}>
                      {st}
                    </li>
                    <FontAwesomeIcon icon={faTrash} onClick={ (e) => deletePendingSubtask(e, st)}/>
                  </div>
                ))
              }
            </ul>
          </section>
        )
      }
      {
        concluded && (
          <section className='display-subtasks-concluded-section'>
            <h3>Concluidas</h3>
            <ul>
              {
                concluded.map((st) => (
                  <div className='display-subtasks-concluded-li'>
                    <li key={st}>
                      {st}
                    </li>
                    <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={ (e) => deleteConcludedSubtask(e, st)}/>
                  </div>
                ))
              }
            </ul>
          </section>
        )
      }
    </article>
  )
}

export default DisplaySubTasks;