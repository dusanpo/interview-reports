import React from "react";
import { Link,useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);
  let headerTitle = "Reports"
  let reportButtons = 
<Link to="/reportsAdministration">
  <li className = "reportsAdministation">Create Report</li>
</Link>

  if(!location.pathname.includes("/reportsAdministration")) {
    reportButtons = null;
    headerTitle= "Interview Reports"
  }

  return (
  
    <nav>
      <h3>{headerTitle}</h3>
      <ul className="links">
        
        <Link to="/">
          <li className = "candidateLink">Candidates</li>
        </Link>
        <Link to="/reportsAdministration">
          <li className = "reportsAdministation">Reports</li>
        </Link>
        {reportButtons}
  <li> <i className="medium material-icons" onClick = {() =>{
         localStorage.removeItem("token")
        
         window.location.assign('/')
       } }>account_circle</i>
       </li>
      </ul>
    </nav>
  );
};

export default Header;
