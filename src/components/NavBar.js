import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <ul>
    <li> <NavLink
        to="/"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Home
      </NavLink>
      </li>
    <li> <NavLink 
        to="/movies"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
      Movies
      </NavLink></li>
    <li><NavLink
        to="/directors"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
       Directors
      </NavLink></li>
    <li> <NavLink
        to="/actors"
        exact
        activeStyle={{
          background: "#000",
        }}
      >
        Actors
      </NavLink></li>
  </ul>
    
    
    </div>;
}

export default NavBar;
