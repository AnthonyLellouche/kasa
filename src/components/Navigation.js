import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />
      <ul>
        <NavLink to="/">
          <li className="test">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
