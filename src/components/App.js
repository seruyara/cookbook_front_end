import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import HomePage from './HomePage';
import NavBar from './NavBar';
import DietaryList from './DietaryList';


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
        <Route path="/Dietaries" element={ <DietaryList />} />
      </Routes>
      
    </Router>
  );
}

export default App;
