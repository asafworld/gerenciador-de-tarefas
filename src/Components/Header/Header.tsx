import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ManagerContext from "../../Context/ManagerContext";
import './Header.css'

function Header() {
  const { presentProject } = useContext(ManagerContext)
  
  return(
    <nav>
      <Link to='/' className="nav-link">PROJETOS</Link>
      <Link to={`/project/${presentProject?.projectId}`} className="nav-link">PROJETO ATUAL</Link>
    </nav>
  )
}

export default Header;