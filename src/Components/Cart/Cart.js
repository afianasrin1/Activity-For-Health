import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../images/logo.jpg";
const Cart = ({ time }) => {
  const [second, setSecond] = useState();

  return (
    <div className="px-4 sticky top-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2  items-center">
            {/* <img className="w-10 h-10 rounded-full" src={logo} alt="" /> */}
            <div>
              <h1 className="font-bold">Mst.Afia Nasrin</h1>
              <p className="text-sm">
                <span>Dhaka</span>, <span>Bangladesh</span>
              </p>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-lg flex justify-between">
            <div className="text-center">
              <h1>
                <span className="font-bold">48</span>
                <sub>kg</sub>
              </h1>
              <span>Weight</span>
            </div>
            <div className="text-center">
              <h1>
                <span className="font-bold">5.8</span>
              </h1>
              <span>Height</span>
            </div>
            <div className="text-center">
              <h1>
                <span className="font-bold">16</span>
                <sub>yrs</sub>
              </h1>
              <span>Age</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold mb-5">Add A Break</h1>
            <div className="bg-gray-300 py-3 px-2 flex justify-between rounded-lg"></div>
          </div>
          <div>
            <h1 className="font-bold  mb-5">Exercise Details</h1>
            <div className="flex mb-8 flex-col gap-6">
              <div className="bg-gray-100 px-2 flex justify-between py-3 rounded-lg ">
                <h1 className="font-bold">Exercise time </h1>
                <span>{time} seconds</span>
              </div>
              <div className="bg-gray-100 px-2 flex justify-between py-3 rounded-lg ">
                <h1 className="font-bold">Break time </h1>
                <span>{second} seconds</span>
              </div>
            </div>
            <button className="btn btn-primary w-full">
              Activity Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
