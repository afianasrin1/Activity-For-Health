import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

import Exercise from "../Exercise/Exercise";

import "./Exercises.css";
const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  //Cart Rightside state declare
  const [time, setCart] = useState(0);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToTime = (exercise) => {
    // console.log(exercise);

    setCart(time + exercise.time);
  };

  return (
    <div className=" pl-20 bg-gray-100 xl:grid xl:grid-cols-5 lg:grid-cols-3  sm:grid grid-cols-2 flex  flex-col-reverse">
      <div className=" xl:col-span-4 lg:col-span-2 pt-4  pb-10   ">
        <h1 className="text-4xl text-center font-bold mt-4">
          Selected my exercise
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 pt-5 gap-10 ">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise.id}
              exercise={exercise}
              handleAddToTime={handleAddToTime}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-200">
        <Cart time={time} />
      </div>
    </div>
  );
};

export default Exercises;
