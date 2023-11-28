import React, { useState } from 'react';
import './NavBar.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
            <div className='menu-name'>
                <p>Through The Hours</p>
                <p>A piece of my life</p>
            </div>
            <div className="menu-items">
                <div>Home</div>
                <div>Wallet</div>
                <div>Product</div>
            </div>
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </div>
    );
}

export default HamburgerMenu;
