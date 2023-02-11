import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ManagerContext from "../../Context/ManagerContext";
import IProject from "../../Entities/Interfaces/IProject";
import './CreateProject.css';

function CreateProject() {
  const [label, setLabel] = useState<string>('');
  const [description, setLDescription] = useState<string>('');
  const { projects, setProject, setPresentProject, errorMessage, setErrorMessage } = useContext(ManagerContext);
  const navigate = useNavigate();

  function inputsCheck() {
    if (label === '' || description === '') {
      setErrorMessage('Insira um nome e uma descrição para o projeto.');
      return false;
    }
    setErrorMessage(undefined)
    return true;
  }

  function projectCreator(event: React.SyntheticEvent) {
    event.preventDefault()
    if (!inputsCheck()) return false;
    const index = projects?.length
    const newProject: IProject = {
      projectLabel: label,
      description,
      finishedAt: '',
      tasks: null,
      projectId: index ? index : 0,
      percent: 0,
      concluded: false
    }
    if (projects?.length !== 0 && projects !== undefined) {
      setProject([...projects, newProject])
      setPresentProject(newProject)
    } else {
      setProject([newProject])
      setPresentProject(newProject)
    }
    navigate(`/project/${index}`)
  }
  
  return(
    <article className="create-project-article">
      <form className="create-project-section">
        <div className="create-project-div">
          <input
            placeholder="Nome do Projeto:"
            className="create-project-input"
            value={ label }
            onChange={ ({ target }) => setLabel(target.value) }
          />
          <textarea
            value={ description }
            className="create-project-textarea"
            placeholder='Descreva o projeto:'
            onChange={ ({ target }) => setLDescription(target.value) }
          />
        </div>
        { errorMessage && (<p className="error-message">{errorMessage}</p>)}
        <button
          type="submit"
          className="form-control create-project-button"
          onClick={ (e) => projectCreator(e) }
        >
          Criar projeto!
        </button>
      </form>
    </article>
  )
}

export default CreateProject;