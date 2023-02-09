import React, { useState } from "react";
import propTypes from 'prop-types';
import ManagerContext from "./ManagerContext";
import IContext from "../Entities/Interfaces/IContext";
import IProject from "../Entities/Interfaces/IProject";
import ITask from "../Entities/Interfaces/ITask";

function ManagerProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProject] = useState<IProject[] | undefined>();
  const [tasks, setTask] = useState<ITask[] | undefined>();
  const [concludedPercent, setConcludedPercent] = useState<number>(0);
  const [presentProject, setPresentProject] = useState<IProject | undefined>();

  const value: IContext = {
    projects,
    setProject,
    tasks,
    setTask,
    concludedPercent,
    setConcludedPercent,
    presentProject,
    setPresentProject
  }
  
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