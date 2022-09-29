import React from "react";
// import navbar from "./navbar.jpg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-4">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {/* <div className="w-10 rounded-full">
                <img src={navbar} alt="" />
              </div> */}
            </label>
          </div>
        </div>
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Activity for health
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
