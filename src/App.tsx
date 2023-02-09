import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerProvider from './Context/Provider';
import './App.css';
import Projects from './Pages/Projects/Projects';
import Project from './Components/Projects/Project';

function App() {
  return (
    <ManagerProvider>
      <Routes>
        <Route path='/' element={ <Projects /> } />
        <Route path='/project/:id' element={ <Project /> } />
      </Routes>
    </ManagerProvider>
  );
}

export default App;
