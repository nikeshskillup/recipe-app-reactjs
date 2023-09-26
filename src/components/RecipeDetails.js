import React from "react";

export default function RecipeDetails({ recipe }) {
    console.log(recipe)
  return (
    <div className="recipe-details">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <p>Cuisine Type: {recipe.cuisineType.join(", ")}</p>
      <p>Meal Type: {recipe.mealType.join(", ")}</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Health Labels: {recipe.healthLabels.join(", ")}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
}
