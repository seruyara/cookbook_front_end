import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:9292/recipes');
      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        console.error('Failed to fetch recipes');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:9292/recipes/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted recipe from the state
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      } else {
        console.error('Failed to delete recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="recipe-list" id='recipe-list'>
      <h1 className="recipe-list-title">Recipes</h1>
      <div className="search-bar">
        <SearchBar/>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <ul className="recipe-title">{recipe.title}🍲</ul>
          <h3 className="recipe-instructions">{recipe.instructions}</h3>
          <Rating/>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
