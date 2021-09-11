import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
       <nav>
           <ul>
               <Link to="/home">
                   <li>Home Page</li>
               </Link>
               <Link to="/landingPage">
                   <li>Landing Page</li>
               </Link>
           </ul>
       </nav>
    )
}

export default Header

