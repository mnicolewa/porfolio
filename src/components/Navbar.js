import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
    return(
        <nav className="navbar">
            <Link className="name" to="/">M. Nicole Washington</Link>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Navbar;