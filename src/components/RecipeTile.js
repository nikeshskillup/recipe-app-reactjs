import React from "react";
import "../assets/css/RecipeTile.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  // Ensure that the image URL ends with a supported image extension
  const imageRegex = /\.(jpeg|jpg|gif|png)$/;
  const isImageValid = recipe?.image?.match(imageRegex) !== null;

  return isImageValid ? (
    <div
      className="recipeTile"
      key={uuidv4()}
      onClick={() => window.open(recipe?.url)}
    >
      <img
        className="recipeTile__img"
        src={recipe?.image}
        alt={recipe?.label}
      />
      <p className="recipeTile__name">{recipe?.label}</p>
    </div>
  ) : null;
}
