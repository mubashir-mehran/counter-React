//import React, { Component } from "react";

//stateless functional components

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge rounded-pill text-bg-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
