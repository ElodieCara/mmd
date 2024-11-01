import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export const SecondaryNav = () => {
    return (
        <div className="SecondaryNav">
            <div className="SecondaryNav__left">
                <h2>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Home
                    </NavLink>
                </h2>
            </div>
            <div className="SecondaryNav__middle">
                <h2>
                    <NavLink to="/news" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        News
                    </NavLink>
                </h2>
                <h2>
                    <NavLink to="/all-articles" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Articles
                    </NavLink>
                </h2>
                <h2>
                    <NavLink to="/categories" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Catégories
                    </NavLink>
                </h2>
                <h2>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        À Propos
                    </NavLink>
                </h2>
                <h2>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        Contact
                    </NavLink>
                </h2>
            </div>
            <div className="SecondaryNav__right">
            </div>
        </div>
    );
};
