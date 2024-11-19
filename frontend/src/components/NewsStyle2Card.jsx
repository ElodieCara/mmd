import React from 'react';
import cheval from '../assets/cheval.webp';
import { Button } from './Button';

const NewsStyle2Card = ({ title, image = cheval, articleId }) => (
    <div className="Card__container__body">
        <div className="Card__container__body__image">
            <img src={image} alt={title || 'Image'} />
        </div>
        <div className="Card__container__body__bottom__text">
            <h5>{title || 'Titre article'}</h5>
        </div>
        <Button text="Voir plus" linkTo={`/article/${articleId}`} />
    </div>
);

export default NewsStyle2Card;
