import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerProvider from './Context/Provider';
import './App.css';
import Projects from './Pages/Projects/Projects';
import Project from './Pages/ProjectTasks/Project';
import Subtask from './Pages/Task/SubTask';

function App() {
  return (
    <ManagerProvider>
      <Routes>
        <Route path='/' element={ <Projects /> } />
        <Route path='/project/:id' element={ <Project /> } />
        <Route path='/task/:id' element={ <Subtask /> } />
      </Routes>
    </ManagerProvider>
  );
}

export default App;
