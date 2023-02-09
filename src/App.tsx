import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerProvider from './Context/Provider';
import './App.css';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <ManagerProvider>
      <Routes>
        <Route path='/' element={ <Projects /> } />
      </Routes>
    </ManagerProvider>
  );
}

export default App;
