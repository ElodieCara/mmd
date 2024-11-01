import React from 'react';
import cheval from '../assets/cheval.webp';
import { Button } from './Button';

export const Card = ({
    className,
    title,
    createdAt, // Date de création de l'article
    image = cheval,
    views,
    description, // Description longue de l'article
    content, // Contenu de l'article
    articleId,

}) => {
    // Vérifier si createdAt est une chaîne de caractères valide et créer un nouvel objet Date
    const dateObj = createdAt ? new Date(createdAt) : null;

    // Extraire le jour et le mois de la date si valide, sinon définir des valeurs par défaut
    const formattedDate = dateObj && !isNaN(dateObj)
        ? className.includes('Card--news-style') // Appliquer le format DD/MM/YYYY pour la section middle
            ? `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`
            : `${dateObj.getDate()} ${dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}`
        : 'N/A';

    const isHighlight = className.includes("Card--highlight");
    const isMiddle = className.includes("Card--news-style");
    // const showDate = isHighlight || isMiddle; // Affiche la date pour highlight et middle

    return (
        <div className={`Card ${className}`}>
            <div className="Card__container">
                {/* Date en haut pour la carte highlight (garde le style inchangé) */}
                {isHighlight && (
                    <div className="Card__container__top">
                        <div className="Card__container__top__date">
                            <span className="date-number">{dateObj.getDate()}</span>
                            <span className="date-month">{dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                        </div>
                        <div className="Card__container__top__button">
                            <div className="red-circle"></div>
                        </div>
                    </div>
                )}
                <div className="Card__container__body">
                    {/* Section Image */}
                    <div className="Card__container__body__image">
                        <img src={image} alt={title || 'Image'} />
                    </div>

                    {/* Section Bottom avec texte, description et vues */}
                    <div className="Card__container__body__bottom">
                        <div className="Card__container__body__bottom__text">
                            <h5>{title || 'Titre article'}</h5>
                            <span>{content || 'Pas de contenu disponible.'}</span> {/* Afficher le contenu */}
                            <p>{description || 'Aucune description disponible.'}</p> {/* Afficher la description */}
                        </div>
                    </div>
                    <p className='Card__container__body__bottom__view'>{views || 0} vues</p>
                </div>
                <div className="Card__container__footer">
                    {/* Bouton pour rediriger vers la page de l'article */}
                    <Button
                        text="Voir plus"
                        linkTo={`/article/${articleId}`} // Redirection vers la page de l'article via son ID
                    />
                    {/* Date en bas pour middle uniquement */}
                    {isMiddle && (
                        <div className="Card__container__footer__date">
                            <span>{formattedDate}</span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};
