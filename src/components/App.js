import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import HomePage from './HomePage';
import NavBar from './NavBar';


function App() {
  return (
    <Router>
      <header>
        <nav>
        <NavBar/>
      </nav>
      </header>
      <Routes>
        <Route path="/HomePage" element={ <HomePage />} />
        <Route path="/Recipe" element={ <RecipeList />} />
      </Routes>
      
    </Router>
  );
}

export default App;
