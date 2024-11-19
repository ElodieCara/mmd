import React from 'react';
import cheval from '../assets/cheval.webp';

const NewsStyle3Card = ({ title, image = cheval, formattedDate }) => (
    <div className="Card__container__body">
        <div className="Card__container__body__image">
            <img src={image} alt={title || 'Image'} />
        </div>
        <div className="Card__container__body__bottom__text">
            <h5>{title || 'Titre article'}</h5>
            <span>{formattedDate}</span>
        </div>
    </div>
);

export default NewsStyle3Card;
