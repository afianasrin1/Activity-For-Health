import React from "react";

const Exercise = ({ exercise, handleAddToTime }) => {
  const { name, id, time, age, about, picture } = exercise;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10  bg-slate-200 ">
        <img src={picture} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center bg-slate-200">
        <h2 className="card-title text-2xl">Exercise Name:{name}</h2>
        <p className="text-2xl pb-2">Time Required:{time}s</p>
        <p className="text-xl pb-2">Age:{age}</p>
        <p className="text-xl pb-2">About:{about.slice(0, 60)}.....</p>

        <div className="card-actions">
          <button
            onClick={() => handleAddToTime(exercise)}
            className="btn btn-accent"
          >
            Add To Time Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
