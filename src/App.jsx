import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "5c47ae67";
  const APP_KEY = "399d48fce82bc3eb5def62ef84588511";
  const link = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    async function getRecipes() {
      const response = await axios.get(link);
      setRecipes(response.data.hits);
    }
    getRecipes();
  }, [query]);

  function handelSubmit(e) {
    e.preventDefault();
    setQuery(input);
    setInput("");
  }

  return (
    <>
      <div>
        <div className="App">
          <form onSubmit={handelSubmit} className="search-form">
            <input
              type="text"
              className="search-bar"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
          <div className="recipes">
            {recipes.map((singleRecipe, index) => {
              return (
                <Recipe
                  key={Math.random(Math.random() * index)}
                  img={singleRecipe.recipe.image}
                  title={singleRecipe.recipe.url}
                  calorie={singleRecipe.recipe.calories}
                  ingredients={singleRecipe.recipe.ingredients}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
