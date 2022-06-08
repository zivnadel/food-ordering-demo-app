import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";
import useHttp from "../hooks/useHttp";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [isLoading, error, sendRequest] = useHttp();
  const [meals, setMeals] = useState([]);

  const addMeals = (meals) => {
    const transformedMeals = [];

    for (const mealKey in meals) {
      transformedMeals.push({
        id: mealKey,
        name: meals[mealKey].name,
        description: meals[mealKey].description,
        price: meals[mealKey].price || 0
      });
    }

    setMeals(transformedMeals);
  };

  useEffect(() => {
    sendRequest(addMeals, {
      url: "https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    });
  }, [sendRequest]);

  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            >
              {meal.name}
            </MealItem>
          );
        })}
      </ul>
      {isLoading && <p>Loading! Please wait...</p>}
      {error && <p>{error.message}</p>}
    </Card>
  );
};

export default AvailableMeals;
