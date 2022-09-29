import React from "react";

const Exercise = ({ exercise, handleAddToTime }) => {
  const { name, id, time, age, about, picture } = exercise;

  return (
    <div className="exercise">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Shoes!</h2> */}
          <p>Name:{name}</p>
          <p>Age:{age}</p>
          <p>id:{id}</p>
          <p>Time Required:{time}s</p>
          <p>About:{about.slice(0, 30)}</p>
          {/* <p>About:{about ? about?.slice(0, 20) : "N/A"}</p> */}
          <div className="card-actions">
            <button
              onClick={() => handleAddToTime(exercise)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
