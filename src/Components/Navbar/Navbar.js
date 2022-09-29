import React from "react";
import navbar from "../../images/navbar.jpg";
const Navbar = () => {
  return (
    <div className="navbar bg-base-200 shadow-lg">
      <div className="flex-none px-10">
        <div className="dropdown dropdown-end mr-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={navbar} alt="" />
            </div>
          </label>
        </div>
      </div>
      <h1 className="text-4xl text-center font-bold mt-4 pb-5">
        Activity for health
      </h1>
      {/* <div className="flex-1">
          
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Activity for health
          </a>
        </div> */}
    </div>
  );
};

export default Navbar;
