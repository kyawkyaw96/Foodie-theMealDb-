import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loader/Loading";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    // console.log(data);
    setMeals(data.meals);
    setLoading(false);
  };
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=' flex flex-wrap  items-center justify-center gap-5 py-10'>
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Meals;
