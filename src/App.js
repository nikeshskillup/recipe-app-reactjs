// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./assets/css/app.css";
import RecipeTile from "./components/RecipeTile";
import RecipeDetails from "./components/RecipeDetails";
import recipesData from "./data/recipes.json";

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fetch request with a delay
    setTimeout(() => {
      setRecipes(recipesData);
      setLoading(false);
    }, 1500);
  }, []);

  const healthLabelsOptions = Array.from(
    new Set(recipesData.flatMap((recipe) => recipe.healthLabels))
  );

  const categoryOptions = ["All", ...healthLabelsOptions];

  const filterRecipes = () => {
    // Create a copy of the original data to filter
    let filteredRecipes = [...recipesData];

    if (selectedCategory !== "All") {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.healthLabels.includes(selectedCategory)
      );
    }

    if (query.trim() !== "") {
      filteredRecipes = filteredRecipes.filter((recipe) =>
        recipe.label.toLowerCase().includes(query.toLowerCase())
      );
    }

    setRecipes(filteredRecipes);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    filterRecipes();
  };

  return (
    <Router>
      <div className="app">
        <div className="app_header">
          <Link to="/" className="linktext">
            <h1>🍴 Foodie Delights 🍣</h1>
          </Link>
        </div>
        <p>Search Your Recipe Here:</p>
        <form className="app__searchForm" onSubmit={onSubmit}>
          <input
            className="app__input"
            type="text"
            placeholder="enter ingredient"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input className="app__submit" type="submit" value="Search" />
          <select
            className="app__category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </form>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="app__recipes">
            {recipes.length !== 0 ? (
              <Routes>
              <Route
                path="/"
                element={
                  <div className="recipe-grid">
                    {recipes.map((recipe) => (
                      <Link
                      className="linktext"
                        key={recipe.label}
                        to={`/recipe/${encodeURIComponent(recipe.label)}`}
                      >
                        <RecipeTile recipe={recipe} />
                      </Link>
                    ))}
                  </div>
                }
              />
              
              <Route
                path="/recipe/:label"
                element={({ params }) => {
                  const selectedRecipe = recipes.find((recipe) => recipe.label === decodeURIComponent(params.label));
                  return <RecipeDetails recipe={selectedRecipe} />;
                }}
              />
            </Routes>
            
            ) : (
              <p>No recipes found.</p>
            )}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
