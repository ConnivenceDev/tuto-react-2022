import React from 'react';
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>

                        Accueil

                    </li>
                </NavLink>
                <NavLink to="/game" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>

                        Défi

                    </li>
                </NavLink>
                <NavLink to="/pairs" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>

                        Paires

                    </li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>

                        A propos

                    </li>
                </NavLink>
                <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>

                        Blog

                    </li>
                </NavLink>

            </ul>
        </nav>
    );
};

export default Nav;