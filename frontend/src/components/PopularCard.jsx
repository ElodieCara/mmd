import React from 'react';
import cheval from '../assets/cheval.webp';
import IconEyes from '../assets/Eye.png';

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
            <div className='Card__container__body__bottom__view'>
                <img src={IconEyes} alt="Icon Eyes" />
                {views || 0} vues
            </div>
        </div>
    </>
);

export default PopularCard;
