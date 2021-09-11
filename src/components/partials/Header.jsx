import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <h3>Interview Reports</h3>
      <ul className="links">
        <Link to="/home">
          <li>Home Page</li>
        </Link>
        <Link to="/landingPage">
          <li>Landing Page</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
