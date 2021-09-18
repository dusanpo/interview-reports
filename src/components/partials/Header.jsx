import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  return (
  
    <nav>
      <h3>Interview Reports</h3>
      <ul className="links">
        
        <Link to="/">
          <li className = "candidateLink">Candidates</li>
        </Link>
       <button onClick = {() =>{
         localStorage.removeItem("token")
         history.push("/LoginPage")
         //window.location.assign('/')
       } }>Log Out</button>
      </ul>
    </nav>
  );
};

export default Header;
