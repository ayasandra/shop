import React from "react";
import {Link} from "react-router-dom"

import "./menu.css";

const Menu = () => {
   return (
         <div className="menu">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/aboutus">About Us</Link></li>
               <li><Link to="/contacts">Contacts</Link></li>
            </ul>
         </div>
   )
}

export default Menu