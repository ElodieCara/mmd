import React from 'react';
import cheval from '../assets/cheval.webp';
import { Button } from './Button';


const NewsStyle4Card = ({ title, content, description, image = cheval, articleId }) => (
    <div className="Card__container__body">
        <div className="Card__container__body__bottom">
            <div className="Card__container__body__bottom__text">
                <h5>{title || 'Titre article'}</h5>
                <p>{content || 'Pas de contenu disponible.'}</p>
                <p>{description || 'Aucune description disponible.'}</p>
            </div>
        </div>
        <Button text="Voir plus" linkTo={`/article/${articleId}`} />
        <div className="Card__container__body__image">
            <img src={image} alt={title || 'Image'} />
        </div>
    </div>
);

export default NewsStyle4Card;
