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
    type
}) => {
    // Vérifier si createdAt est une chaîne de caractères valide et créer un nouvel objet Date
    const dateObj = createdAt ? new Date(createdAt) : null;

    // Extraire le jour et le mois de la date si valide, sinon définir des valeurs par défaut
    const formattedDate = dateObj && !isNaN(dateObj)
        ? className.includes('Card--news-style') // Appliquer le format DD/MM/YYYY pour la section middle
            ? `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`
            : `${dateObj.getDate()} ${dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}`
        : 'N/A';

    const renderContentByType = () => {
        switch (type) {
            case 'highlight':
                return (
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
                            {/* Section Image */}
                            <div className="Card__container__body__image">
                                <img src={image} alt={title || 'Image'} />
                            </div>

                            {/* Section Bottom avec texte, description et vues */}
                            <div className="Card__container__body__bottom">
                                <div className="Card__container__body__bottom__text">
                                    <h5>{title || 'Titre article'}</h5>
                                    <span>{content || 'Pas de contenu disponible.'}</span> {/* Afficher le contenu */}
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
                            {/* Date en bas pour middle uniquement
                            <div className="Card__container__footer__date">
                                <span>{formattedDate}</span>
                            </div>  */}

                        </div>
                    </>
                );
            case 'popular':
                return (
                    <>
                        <div className="Card__container__top">
                        </div>
                        <div className="Card__container__body">
                            {/* Section Image */}
                            <div className="Card__container__body__image">
                                <img src={image} alt={title || 'Image'} />
                            </div>
                            <div className="Card__container__body__bottom">
                                <div className="Card__container__body__bottom__text">
                                    <h5>{title || 'Titre article'}</h5>
                                    <span>{content || 'Pas de contenu disponible.'}</span> {/* Afficher le contenu */}
                                </div>
                            </div>
                            <p className='Card__container__body__bottom__view'>{views || 0} vues</p>
                        </div>
                    </>
                );
            case 'Card--news-style1':
                return (
                    <>
                        <div className="Card__container__body">
                            <div className="Card__container__body__bottom">
                                <div className="Card__container__body__bottom__text">
                                    <h5>{title || 'Titre article'}</h5>
                                    <span>{content || 'Pas de contenu disponible.'}</span> {/* Afficher le contenu */}
                                    <p>{description || 'Aucune description disponible.'}</p> {/* Afficher la description */}
                                </div>
                            </div>
                            <div className="Card__container__footer">
                                {/* Bouton pour rediriger vers la page de l'article */}
                                <Button
                                    text="Voir plus"
                                    linkTo={`/article/${articleId}`} // Redirection vers la page de l'article via son ID
                                />
                                {/* Date en bas pour middle uniquement */}
                                <div className="Card__container__footer__date">
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Card--news-style2':
                return (
                    <>
                        <div className="Card__container__body__image">
                            <img src={image} alt={title || 'Image'} />
                        </div>
                        <h5>{title}</h5>
                        <Button text="Voir plus" linkTo={`/article/${articleId}`} />
                    </>
                );
            case 'Card--news-style3':
                return (
                    <>
                        <div className="Card__container__body__image">
                            <img src={image} alt={title || 'Image'} />
                            <div className="Card__container__body__bottom__text">
                                <h5>{title || 'Titre article'}</h5>
                                <span>{formattedDate}</span>
                            </div>



                        </div>
                    </>
                );
            case 'Card--news-style4':
                return (
                    <>
                        <div className="Card__container__body">
                            <div className="Card__container__body__bottom">
                                <div className="Card__container__body__bottom__text">
                                    <h5>{title || 'Titre article'}</h5>
                                </div>
                            </div>
                        </div>
                        <Button text="Voir plus" linkTo={`/article/${articleId}`} />
                        <div className="Card__container__body__image">
                            <img src={image} alt={title || 'Image'} />
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        <h5>{title || 'Titre article'}</h5>
                        <p>{description || 'Aucune description disponible.'}</p>
                    </>
                );
        }
    };

    return (
        <div className={`Card ${className}`}>
            <div className="Card__container">
                {renderContentByType()}

            </div>
        </div>
    );
};
