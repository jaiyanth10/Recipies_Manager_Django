// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import RecipeGridPage from "./RecipeGridPage";
import RecipeDetailsPage from "./RecipeDetailsPage";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
          />
          <Route
            path="/recipes"
            element={<RecipeGridPage recipes={recipes} />}
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetailsPage recipes={recipes} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
