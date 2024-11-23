import React, { useState} from "react";
import { Link } from "react-router-dom";



const NavItems = () => {
    return (
        <div className="menu-area">
           <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
           </div>

           {/* <!-- Mobile Menu --> */}
           <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
            <i className="icofont-info-square"></i>
           </div>
        </div>
    )
}

export default NavItems