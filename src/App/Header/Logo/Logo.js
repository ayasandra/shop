import React from "react";
import yourlogo from "./yourlogo.png"
import {Link} from "react-router-dom"

const Logo = () => {
   return (
      <div className="logo">
         <Link to="/"><img src={yourlogo} alt="logo" /></Link>
      </div>
   )
}

export default Logo