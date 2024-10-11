import React from 'react';
import cheval from '../assets/cheval.webp';

export const Card = ({ className, title, image = cheval, views, onClick }) => {
    return (
        <div className={`Card ${className}`} onClick={onClick}>
            <div className="Card__container">
                {/* Section Top avec Date et Bouton */}
                <div className="Card__container__top">
                    <div className="Card__container__top__date">
                        <span className="date-number">21</span>
                        <span className="date-month">April</span>
                    </div>
                    <div className="Card__container__top__button">
                        <div className="red-circle"></div>
                    </div>
                </div>
                <div className="Card__container__body">
                    {/* Section Image */}
                    <div className="Card__container__body__image">
                        <img src={image} alt={title || 'Image'} />
                    </div>

                    {/* Section Bottom avec texte et vues */}
                    <div className="Card__container__body__bottom">
                        <div className="Card__container__body__bottom__text">
                            <h5>{title || 'Titre article'}</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <p className='Card__container__body__bottom__view'>{views || 0} vues</p> {/* Ajout des vues dynamiques */}
                </div>
                <button className="Card__container__button">button</button>
            </div>
        </div>
    );
};
