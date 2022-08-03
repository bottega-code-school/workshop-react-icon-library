import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const logo = require("../../static/assets/images/logo.png");

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              to={to}
              key={to}
              style={{ color: "#129fc0" }}
              activeStyle={{ backgroundColor: "#129fc0", color: "white" }}
              exact
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
