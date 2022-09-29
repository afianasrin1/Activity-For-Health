import React from "react";
// import logo from "./logo.jpg";
const Time = ({ time }) => {
  // console.log(time);
  return (
    <div className="cart-summary">
      {/* <h1 className="text-4xl text-center font-bold mt-4">Time List</h1> */}
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="card-body">
          {/* <figure>
          <img src={logo} alt="Movie" />
        </figure> */}
          <h2 className="card-title">imad</h2>

          <div className="bg-slate-200 py-5 px-5">
            <h2 className="card-title">Add A Break</h2>

            <div className="card-actions justify-center">
              <button className="btn btn-primary">10s</button>
              <button className="btn btn-primary">20s</button>
              <button className="btn btn-primary">40s</button>
              <button className="btn btn-primary">30s</button>
              <button className="btn btn-primary">60s</button>
            </div>
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Activity Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Time;
