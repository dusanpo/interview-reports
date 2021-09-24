import React from "react";
import { Link } from "react-router-dom";
import "./HeaderAdministration.css";

const Header = () => {
 
  return (
  
    <nav>
      <h3>Reports Administration</h3>
      <ul className="links">
        
       {/*  <Link to="/"> //////TODO add icon for return//////
          <li className = "candidateLink">Candidates</li>
        </Link> */}
        <Link to="/company/:id">
          <li className = "reportsAdministation">Reports</li>
        </Link>
       <button className = "btn #008B8B" onClick = {() =>{
         localStorage.removeItem("token")
         window.location.assign('/')
       } }>Log Out</button>
      </ul>
    </nav>
  );
};

export default Header;
