import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ManagerContext from "../../Context/ManagerContext";

function Project() {
  const { presentProject } = useContext(ManagerContext);

  return(
    <article>
      <nav>
        <Link to='/'>Projetos</Link>
      </nav>
      <div>
        <h1>{ presentProject?.projectLabel }</h1>
        <h4>{ presentProject?.percent }% concluído</h4>
      </div>
      <p>{ presentProject?.description }</p>
    </article>
  )
}

export default Project;