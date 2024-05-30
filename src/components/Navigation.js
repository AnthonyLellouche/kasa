import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/components/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            À Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
