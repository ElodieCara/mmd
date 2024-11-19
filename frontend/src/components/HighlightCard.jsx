import React from 'react';
import cheval from '../assets/cheval.webp';
import { Button } from './Button';

const HighlightCard = ({ title, content, image = cheval, views, articleId, dateObj }) => (
    <>
        <div className="Card__container__top">
            <div className="Card__container__top__date">
                <span className="date-number">{dateObj.getDate()}</span>
                <span className="date-month">{dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
            </div>
            <div className="Card__container__top__button">
                <div className="red-circle"></div>
            </div>
        </div>
        <div className="Card__container__body">
            <div className="Card__container__body__image">
                <img src={image} alt={title || 'Image'} />
            </div>
            <div className="Card__container__body__bottom">
                <div className="Card__container__body__bottom__text">
                    <h5>{title || 'Titre article'}</h5>
                    <span>{content || 'Pas de contenu disponible.'}</span>
                </div>
            </div>
            <p className='Card__container__body__bottom__view'>{views || 0} vues</p>
        </div>
        <div className="Card__container__footer">
            <Button text="Voir plus" linkTo={`/article/${articleId}`} />
        </div>
    </>
);

export default HighlightCard;
