import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';
import ManagerContext from "./ManagerContext";
import IContext from "../Entities/Interfaces/IContext";
import IProject from "../Entities/Interfaces/IProject";
import ITask from "../Entities/Interfaces/ITask";

function ManagerProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProject] = useState<IProject[] | undefined>();
  const [tasks, setTask] = useState<ITask[] | undefined>();
  const [presentProject, setPresentProject] = useState<IProject | undefined>();

  const value: IContext = {
    projects,
    setProject,
    tasks,
    setTask,
    presentProject,
    setPresentProject
  }

  useEffect(() => {
    const localState = localStorage.getItem('state');
    if (localState) {
      const parsedState = JSON.parse(localState);
      setProject(parsedState.projects)
      setTask(parsedState.tasks)
      setPresentProject(parsedState.presentProject)
    }

  }, [])

  useEffect(() => {
    const state = {
      projects,
      tasks,
      presentProject
    };
    const stringfiedState = JSON.stringify(state);
    localStorage.setItem('state', stringfiedState)
  }, [projects, tasks, presentProject])
  
  return(
    <ManagerContext.Provider value={ value }>
      { children }
    </ManagerContext.Provider>
  )
}

ManagerProvider.propTypes = {
  children: propTypes.node.isRequired,
}


export default ManagerProvider;