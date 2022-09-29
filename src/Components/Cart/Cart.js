import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = ({ time }) => {
  const toastify = () => {
    toast("You have completed your activity!", { position: "top-center" });
  };
  const [breakTime, setBreakTime] = useState(0);
  useEffect(() => {}, [breakTime]);

  const addLocalStorage = (Time) => {
    setBreakTime(Time);
    localStorage.setItem("break", Time);
  };
  const getLocalStorageItem = localStorage.getItem("break");

  return (
    <div className="px-4 sticky top-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2  items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://scontent.fdac19-1.fna.fbcdn.net/v/t1.6435-9/87036245_1270378613157592_4694736765943021568_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xSaUN3Vg_VcAX-91_m0&_nc_ht=scontent.fdac19-1.fna&oh=00_AT-simAjOM5AkQ2PJmbLHn7Z7jSYK3kicalv42W9sHK2Gg&oe=635A16F1"
              alt=""
            />
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
                <span className="font-bold">38</span>
                <sub>kg</sub>
              </h1>
              <span>Weight</span>
            </div>
            <div className="text-center">
              <h1>
                <span className="font-bold">4.5</span>
              </h1>
              <span>Height</span>
            </div>
            <div className="text-center">
              <h1>
                <span className="font-bold">20</span>
                <sub>yrs</sub>
              </h1>
              <span>Age</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold mb-5">Add A Break</h1>
            <div className="bg-gray-300 py-3 px-2 flex justify-between rounded-lg">
              <div className="rounded-full cursor-pointer transition-all   bg-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                <button
                  className="  p-2 font-bold "
                  onClick={(e) => addLocalStorage(e.target.innerText)}
                >
                  15
                </button>
                <span className="relative right-2">s</span>
              </div>
              <div className="rounded-full cursor-pointer transition-all   bg-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                <button
                  className="  p-2 font-bold "
                  onClick={(e) => addLocalStorage(e.target.innerText)}
                >
                  25
                </button>
                <span className="relative right-2">s</span>
              </div>
              <div className="rounded-full cursor-pointer transition-all   bg-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                <button
                  className="  p-2 font-bold "
                  onClick={(e) => addLocalStorage(e.target.innerText)}
                >
                  35
                </button>
                <span className="relative right-2">s</span>
              </div>
              <div className="rounded-full cursor-pointer transition-all   bg-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                <button
                  className="  p-2 font-bold "
                  onClick={(e) => addLocalStorage(e.target.innerText)}
                >
                  45
                </button>
                <span className="relative right-2">s</span>
              </div>
              <div className="rounded-full cursor-pointer transition-all   bg-white   hover:bg-blue-600 active:bg-blue-600  hover:text-white">
                <button
                  className="  p-2 font-bold "
                  onClick={(e) => addLocalStorage(e.target.innerText)}
                >
                  60
                </button>
                <span className="relative right-2">s</span>
              </div>
            </div>
          </div>
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
              <span>{getLocalStorageItem} seconds</span>
            </div>
          </div>
          <button onClick={toastify} className="btn btn-primary w-full">
            Activity Completed
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cart;
