import React from 'react';
import cheval from '../assets/cheval.webp';

const PopularCard = ({ title, content, image = cheval, views }) => (
    <>
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
    </>
);

export default PopularCard;
