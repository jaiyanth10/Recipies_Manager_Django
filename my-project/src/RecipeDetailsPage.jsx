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
      <br></br>
      <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
        Ingredients :
      </h3>
      <p style={{ display: "flex", justifyContent: "flex-start" }}>{recipe.ingridients}</p>
      <div className="recipe-steps">
      <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
        Steps :
      </h3>
        {recipe.steps.map((step, index) => (
          <p key={index}>{`${step}`}</p>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
