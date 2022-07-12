import React from "react";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import Navigation from "./Navigation";

const NavBar = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg fixed-top">
    <div className="container-fluid">
      <Logo />
      <BurgerButton />
      <Navigation user={user} />
    </div>
  </nav>
);

export default NavBar;
