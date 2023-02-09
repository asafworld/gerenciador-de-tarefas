import React, { useState, useContext } from "react";
import ManagerContext from "../../Context/ManagerContext";
import IProject from "../../Entities/Interfaces/IProject";

function CreateProject() {
  const [label, setLabel] = useState<string>('');
  const [description, setLDescription] = useState<string>('');
  const { projects, setProject } = useContext(ManagerContext);
  
  function projectCreator(event: React.SyntheticEvent) {
    event.preventDefault()
    const newProject: IProject = {
      projectLabel: label,
      description,
      projectId: projects?.length !== 0
        && projects !== undefined ? projects.length - 1 : 0,
      percent: 0,
      concluded: false
    }
    if (projects?.length !== 0 && projects !== undefined) {
      setProject([...projects, newProject])
    } else {
      setProject([newProject])
    }
  }
  
  return(
    <article>
      <form>
        <label>
          Nome do Projeto:
          <input
            placeholder="Indentifique o projeto"
            value={ label }
            onChange={ ({ target }) => setLabel(target.value) }
          />
        </label>
        <label>
          <textarea
            value={ description }
            onChange={ ({ target }) => setLDescription(target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ (e) => projectCreator(e) }
        >
          Criar projeto!
        </button>
      </form>
    </article>
  )
}

export default CreateProject;