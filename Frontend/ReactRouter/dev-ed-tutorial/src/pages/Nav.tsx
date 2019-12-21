import React from 'react'
import { Link } from 'react-router-dom'
import joy from '../images/joy.png'

export function Nav() {
    return <nav>
        <Link to="/">
            <h3 style={{display: "flex", alignItems: "center"}}>
                <img
                    style={{marginRight: 10, width: 50}}
                    src={joy}
                ></img>
                Kys xDDDD
            </h3>
        </Link>
        <ul className="nav-links">
            <Link to="/pages/about">
                <li>About</li>
            </Link>

            <Link to="/pages/shop">
                <li>Shop</li>
            </Link>
            
        </ul>
    </nav>
}