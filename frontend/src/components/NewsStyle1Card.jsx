import React from 'react';
import { Button } from './Button';

const NewsStyle1Card = ({ title, content, description, formattedDate, articleId }) => (
    <div className="Card__container__body">
        <div className="Card__container__body__bottom">
            <div className="Card__container__body__bottom__text">
                <h5>{title || 'Titre article'}</h5>
                <span>{content || 'Pas de contenu disponible.'}</span>
                <p>{description || 'Aucune description disponible.'}</p>
            </div>
        </div>
        <div className="Card__container__footer">
            <Button text="Voir plus" linkTo={`/article/${articleId}`} />
            <div className="Card__container__footer__date">
                <span>{formattedDate}</span>
            </div>
        </div>
    </div>
);

export default NewsStyle1Card;
