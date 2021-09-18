import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./HeaderAdministration.css";

const Header = () => {
  let history = useHistory();
  return (
  
    <nav>
      <h3>Reports Administration</h3>
      <ul className="links">
        
       {/*  <Link to="/"> //////TODO add icon for return//////
          <li className = "candidateLink">Candidates</li>
        </Link> */}
        <Link to="/reportsAdministration">
          <li className = "reportsAdministation">Reports</li>
        </Link>
        <Link to="/reportsAdministration">
          <li className = "reportsAdministation">Create Report</li>
        </Link>
       <button className = "btn #008B8B" onClick = {() =>{
         localStorage.removeItem("token")
         //history.push("/LoginPage")
         window.location.assign('/')
       } }>Log Out</button>
      </ul>
    </nav>
  );
};

export default Header;
