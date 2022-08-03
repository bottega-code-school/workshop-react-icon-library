import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineContacts } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { RiCalendarEventLine } from "react-icons/ri";

const logo = require("../../static/assets/images/logo.png");

const reactIconLinks: { to: string; label: string; icon: React.ReactNode }[] = [
  { to: "/", label: "Home", icon: <AiFillHome className="custom-icon" /> },
  {
    to: "/about",
    label: "About",
    icon: <AiOutlineContacts className="custom-icon" />,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: <GrSend className="custom-icon" />,
  },
  {
    to: "/events",
    label: "Events",
    icon: <RiCalendarEventLine className="custom-icon" />,
  },
];

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="nav-links">
          {reactIconLinks.map(({ to, label, icon }) => (
            <NavLink
              to={to}
              key={to}
              className="nav-links--item"
              activeClassName="nav-links--active-item"
              exact
            >
              {icon}
              <div className="label">{label}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
