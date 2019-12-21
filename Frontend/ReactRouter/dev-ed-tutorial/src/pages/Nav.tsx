import React from 'react'
import { Link } from 'react-router-dom'
import joy from '../images/joy.png'

export function Nav() {
    return <nav>
        <Link to="/">
            <img src={joy}></img>
            <h3>Logo</h3>
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