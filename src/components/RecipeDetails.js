import React from "react";
import '../assets/css/RecipeDetails.css'

export default function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <div className="recipe-details-content">
        <div className="recipe-details-left">
          <img src={recipe.image} alt={recipe.label} />
        </div>
        <div className="recipe-details-right">
          <h2>{recipe.label}</h2>
          <p>Cuisine Type: {recipe.cuisineType.join(", ")}</p>
          <p>Meal Type: {recipe.mealType.join(", ")}</p>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p> Category: {recipe.category.join(", ")}</p>
        </div>
      </div>
      <div className="recipe-details-method">
      <img src={recipe.method} alt={recipe.label} className="recipe-image"/>
      </div>
    </div>
  );
}

