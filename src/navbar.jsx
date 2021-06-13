import React from 'react'
import "./App.css"
import logo2 from "./logo2.svg"

function Navbar() {
    return (
        <div className="navbar">
<nav className="nav">
    <ul>
        <div className="reactnav">
        <li className="Treact"><img className="logo" src={logo2} alt="" /><a href="#">Treact</a></li>
            
            
        
        </div>
        <div className="reactnav2">
        <li className="nav1"><a href="#">About</a></li>
        <li className="nav1"><a href="#">Blog</a></li>
        <li className="nav1"><a href="#">Pricing</a></li>
        <li className="nav1"><a href="#">Contact Us</a></li>
        <li className="nav1"><a href="#">Login</a></li>
        <li className="navbtn"><a href="#"><button className="btn">Sign Up</button></a></li>
        </div>
    </ul>
</nav>
            
        </div>
    )
}

export default Navbar;
