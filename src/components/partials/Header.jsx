import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header (){
  let history = useHistory();
  return (
  
    <nav>
      <h3>Interview Reports</h3>
      <ul className="links">
        <Link to="/home">
          <li>Home Page</li>
        </Link>
        <Link to="/">
          <li>Candidates</li>
        </Link>
       <button onClick = {(e) =>{
         localStorage.removeItem("token")
         history.push("/LoginPage")
       } }>Log Out</button>
      </ul>
    </nav>
  );
};

export default Header;
