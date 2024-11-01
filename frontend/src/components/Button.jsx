import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Button = ({ text, onClick, linkTo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(); // Si une action est fournie (comme `handleShowMore`), on l'exécute
        }
        if (linkTo) {
            navigate(linkTo); // Si un lien est fourni, on redirige vers la page
        }
    };

    return (
        <button className="btn" onClick={handleClick}>
            {text}
        </button>
    );
};
