import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <NavLink className="navbar-brand" to="/">
    <img
      className="rounded"
      style={{
        position: "relative",
        height: "55px",
        width: "70px",
      }}
      src="logoEL.jpg"
      alt="EL-Flor"
    />
  </NavLink>
);

export default Logo;
