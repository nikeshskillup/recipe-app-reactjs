// RecipeTile.js
import React from "react";
import "../assets/css/RecipeTile.css";

export default function RecipeTile({ recipe }) {
  // Ensure that the image URL ends with a supported image extension
  const imageRegex = /\.(jpeg|jpg|gif|png)$/;
  const isImageValid = recipe?.image?.match(imageRegex) !== null;

  return isImageValid ? (
    <div className="recipeTile">
      <img className="recipeTile__img" src={recipe?.image} alt={recipe?.label} />
      <p className="recipeTile__name">{recipe?.label}</p>
    </div>
  ) : null;
}
