import React, { useState, useEffect } from "react";
import "./assets/css/app.css";
import RecipeTile from "./components/RecipeTile";
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
    <div className="app">
      <div className="app_header">
        <h1>Food Recipe Plaza 🍔</h1>
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
            <div className="recipe-grid">
              {recipes.map((recipe) => (
                <RecipeTile key={recipe.label} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
