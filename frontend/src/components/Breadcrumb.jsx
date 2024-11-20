import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();

    // Découpe le chemin actuel en parties pour construire le fil d'Ariane
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="breadcrumb">
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <li key={to} className={isLast ? "breadcrumb__active" : ""}>
                            {isLast ? (
                                value
                            ) : (
                                <Link to={to}>{value}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
