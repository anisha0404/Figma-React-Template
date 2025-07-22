
// import Logo from 'C:/Users/ANISHA/Desktop/WebDev/React/New folder/template/src/Images/logo.png';
// import './Navbar.css'; 
// const Navbar=()=>{
//     return(
//         <div className="navbar-container">
            
//                 <div className="navbar-brand">
//                     <img src={Logo} alt="Logo" className="logo" />
                   
//                 </div>
//                 <div className="contents">
//                     <ul class="list">
//                         <li><a href="#home" class="home">Home</a></li>
//                         <li><a href="#about">About</a></li>
//                         <li><a href="#projects">Projects</a></li>
//                         <li><a href="#contact">Contact</a></li>
//                     </ul>
//                 </div>
//                 <div className="hireme">
//                     <button>Hire Me</button>
//                 </div>
            
//         </div>
//     )
// }
// export default Navbar;

import React, { useState } from 'react';

// Import assets using relative paths from the src folder
import Logo from '../Images/logo.png';
import menuIcon from '../Images/menuIcon.png';
import closeIcon from '../Images/closeIcon.png';

import './Navbar.css';

const Navbar = () => {
    // State to manage whether the menu is open or not
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar-brand">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            {/* Menu and Close Icons for mobile */}
            <div className="menu-icon">
                <img
                    src={menuOpen ? closeIcon : menuIcon}
                    alt="menu toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>

            {/* Add the 'active' class when menu is open */}
            <div className={`contents ${menuOpen ? 'active' : ''}`}>
                <ul className="list">
                    <li><a href="#home" className="home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>

            <div className="hireme">
                <button>Hire Me</button>
            </div>
        </div>
    );
};

export default Navbar;