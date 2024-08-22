import React from "react";
import { useLocation } from "react-router-dom";

const RecipeDetailPage = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) {
    return <div className="recipe-not-found">Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2 className="recipe-title">{recipe.name}</h2>
      <div className="recipe-steps">
        {recipe.steps.map((step, index) => (
          <p key={index}>{`${step}`}</p>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
