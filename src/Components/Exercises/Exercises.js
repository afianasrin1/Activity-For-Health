import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

import Exercise from "../Exercise/Exercise";

import "./Exercises.css";
const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  //Time er state declare
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToTime = (exercise) => {
    // console.log(exercise);
    const newCart = [...cart, exercise];
    setCart(newCart);
  };

  return (
    <div className="flex mt-10 mx-10">
      {/* <h1 className="text-4xl text-center font-bold mt-4">
          Selected my exercise
        </h1> */}
      <div className="w-3/4">
        <div className=" mx-auto grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              handleAddToTime={handleAddToTime}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4 ">
        <div className="mx-auto grid grid-cols-1 ">
          {/* <h1 className="text-4xl text-center font-bold mt-4">Activity</h1> */}

          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Exercises;
