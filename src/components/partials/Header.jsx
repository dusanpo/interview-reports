import React from "react";
import { Link,useLocation } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css'
import "./Header.css";


const Header = () => {
  let location = useLocation();
   console.log(location.pathname);
  let headerTitle = "Reports"

  if(!location.pathname.includes("/reportsAdministration")) {
    headerTitle= "Interview Reports"
  }

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
    
  });


  return (
    <>
<nav>
  <div className = "nav-wrapper">
    <a href = "/#" className = "brand-logo">{headerTitle}</a>
    <a href="/#" className = "sidenav-trigger" data-target = "mobile-nav">
      <i className = "material-icons">menu</i>
    </a>
    <ul className = "right hide-on-med-and-down links">
      <li><Link to="/"><i>Candidates</i></Link></li>
      <li><Link to="/reportsAdministration"><i>Reports</i></Link></li>
      <li> <img className = "image" src = "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-2/128/88-512.png" alt = ""
    onClick = {() =>{
         localStorage.removeItem("token")
         window.location.assign('/')
       } }/></li>
    </ul>
  </div>

</nav>

<ul className = "sidenav" id = "mobile-nav">
 <li><Link to="/">Candidates</Link></li>
 <li><Link to="/reportsAdministration">Reports</Link></li>
  <li onClick = {() =>{
    localStorage.removeItem("token")
    window.location.assign('/')
    }}><a href = "/#" className = "navLog">Log out</a></li>
</ul>
    </>
  );
};

export default Header;
