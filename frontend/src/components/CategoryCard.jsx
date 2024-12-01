import React from 'react';
import MesMoires from '../assets/MesMoires.webp';

const CategoryCard = ({ title, image, createdAt, content }) => {
    const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'Date inconnue';

    return (
        <div
            className="category-card"
            style={{
                backgroundImage: `url(${MesMoires})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
                color: 'white',
            }}
        >
            <div className="category-card__overlay">
                <h3 className="category-card__title">{title}</h3>
                <p className="category-card__date">{date}</p>
                <p className="category-card__content">{content}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
