import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import LetterSelector from "./components/LetterSelector";

function App() {
  // TODO: add react router
  const [meals, setMeals] = useState([]);

  const getMeals = (letter = "a") => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  useEffect(() => {
    // Get themealdb
    getMeals();
  }, []);

  return (
    <div>
      <LetterSelector onSelect={(letter) => getMeals(letter)} />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <Card
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            strInstructions={meal.strInstructions}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
