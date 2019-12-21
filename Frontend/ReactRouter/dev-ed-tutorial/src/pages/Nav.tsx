import React from 'react'
import { NavLink } from 'react-router-dom'
import joy from '../images/joy.png'

export default function() {
    return <nav>
        <NavLink to="/">
            <h3 style={{display: "flex", alignItems: "center"}}>
                <img
                    alt="logo"
                    style={{marginRight: 10, width: 30}}
                    src={joy}
                ></img>
                Kys xDDDD
            </h3>
        </NavLink>
        <ul className="nav-links">
            <NavLink activeClassName="NavLink-active" to="/pages/about">
                <li>About</li>
            </NavLink>

            <NavLink activeClassName="NavLink-active" to="/pages/shop">
                <li>Shop</li>
            </NavLink>
            
        </ul>
    </nav>
}