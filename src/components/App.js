import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipelist" element={ <RecipeList />} />
        <Route path="/homepage" element={ <HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
