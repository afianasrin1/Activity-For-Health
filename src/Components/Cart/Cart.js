import React from "react";
import "../../images/navbar.jpg";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="flex">
        {/* <figure>
          <img src={logo} alt="Movie" />
        </figure> */}
        <h2 className="text-4xl text-center font-bold mt-4">
          Sidratul muntaha
        </h2>
      </div>
      <div className="bg-slate-200 py-5 px-5">
        <h2 className="text-4xl text-center font-bold mt-4">
          75kg <span>Weight</span>
        </h2>
      </div>
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
      <div>
        <h2 className="text-4xl text-center font-bold mt-4">
          Exercise Details
        </h2>
        {/* <h2> Exercise time:{time}</h2> */}
        <h2> Breaktime:15s</h2>
      </div>

      <div className="card-actions justify-center">
        <button className="btn btn-primary">Activity Completed</button>
      </div>
    </div>
  );
};

export default Cart;
