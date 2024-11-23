import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    return (
        <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
            <div className="menu-area">
                <div className="menu">
                    <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                    <i className="icofont-info-square"></i>
                </div>
            </div>
        </header>
    );
};

export default NavItems;
