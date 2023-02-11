import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';
import ManagerContext from "./ManagerContext";
import IContext from "../Entities/Interfaces/IContext";
import IProject from "../Entities/Interfaces/IProject";
import getLocalStorage from "../utils/LocalStorage/GetLocalStorage";
import saveLocalStorage from "../utils/LocalStorage/SaveLocalStorage";

function ManagerProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProject] = useState<IProject[] | undefined>();
  const [presentProject, setPresentProject] = useState<IProject | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const value: IContext = {
    projects,
    setProject,
    presentProject,
    setPresentProject,
    errorMessage,
    setErrorMessage
  }

  useEffect(() => {
    setProject(getLocalStorage('projects'));
    setPresentProject(getLocalStorage('presentProject'))
    setErrorMessage(undefined)
  }, [])

  useEffect(() => {
    if (projects) saveLocalStorage('projects', projects)
    if (presentProject) saveLocalStorage('presentProject', presentProject)
  }, [projects, presentProject])
  
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