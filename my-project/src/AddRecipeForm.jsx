// AddRecipeForm.jsx

import React, { useState } from "react";

const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [steps, setSteps] = useState("");
  const [ingridients,setIngridients] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipe = {
      name,
      image,
      ingridients,
      steps: steps.split("\n"),
    };

    try {
      const response = await fetch("http://localhost:8000/api/submitRecipie/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        alert("Recipe submitted successfully!");
      } else {
        alert("Failed to submit recipe.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting recipe.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name of Recipe:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <label htmlFor="ingridients">Ingridients:</label>
      <input
        type="text"
        id="ingridients"
        value={ingridients}
        onChange={(e) => setIngridients(e.target.value)}
        required
      />


      <label htmlFor="steps">Steps for Preparation:</label>
      <textarea
        id="steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        rows="5"
        required
      ></textarea>

      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
