import React, { useEffect, useState } from 'react';
import Rating from './Rating';

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

  return (
    <div className="recipe-list">
      <h1 className="recipe-list-title">Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
        <ul className="recipe-title">{recipe.title}🍲</ul>
        <h3 className="recipe-instructions">{recipe.instructions}</h3>
        <Rating/>
      </div>
      ))}
    </div>
  );
};

export default RecipeList;
