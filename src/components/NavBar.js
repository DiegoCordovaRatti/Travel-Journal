import React from "react";
import Logo from '../images/logo.svg'
import '../style/NavBar.css';

export default function NavBar(){
    return(
        <nav className="nav--container">
                <img className="nav-logo" src={Logo} alt="earth-logo" />
                <h4 className="nav-title">My Travel Journal</h4>
        </nav>
    )
}