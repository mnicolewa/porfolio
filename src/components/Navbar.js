import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
    return(
        <nav className="navbar">
         <ul>
            <li><Link to ='/about'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to ='/' id="name">Nicole Washington</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;