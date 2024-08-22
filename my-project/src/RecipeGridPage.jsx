import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeGridPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/fetchRecipie/');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-grid">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={recipe.image} alt={recipe.name} />
          <h3>{recipe.name}</h3>
          <Link to={`/recipes/${index}`} state={{ recipe }}>
            <button>View Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeGridPage;
