import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import LetterSelector from "./components/LetterSelector";
import SearchInput from "./components/SearchInput";

function App() {
  // TODO: add react router
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getMeals = (letter = "a") => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals);
        } else {
          setMeals([]);
        }
        setLoading(false);
      });
  };

  const getMealsBySearch = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  const restartSearch = () => {
    setSearch("");

    getMeals();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Get themealdb
    getMeals();
  }, []);

  return (
    <div className="m-4">
      <div className="flex justify-between">
        <SearchInput
          onSearch={getMealsBySearch}
          onChange={handleSearchChange}
        />
        <button type="button" onClick={restartSearch} className="btn ">
          Refresh
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <LetterSelector onSelect={(letter) => getMeals(letter)} />
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <span className="loading loading-dots loading-lg"></span>
        ) : (
          meals.map((meal) => (
            <Card
              key={meal.idMeal}
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
              strInstructions={meal.strInstructions}
            />
          ))
        )}
        {meals.length === 0 && !loading && (
          <p className="text-center">No meals found</p>
        )}
      </main>
    </div>
  );
}

export default App;
