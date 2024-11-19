import React from 'react';
import cheval from '../assets/cheval.webp';
import { Link } from 'react-router-dom';

const AllArticlesCard = ({
    image = cheval,
    title,
    content,
    formattedDate,
    articleId,
    views
}) => {
    return (
        <Link to={`/article/${articleId}`} className="Card__container--link">
            {/* Utilisation de Link pour rediriger */}
            <div className="Card__container__body">
                <div className="Card__container__body__image">
                    <img src={image} alt={title || 'Image'} />
                </div>
                <div className="Card__container__body__bottom">
                    <div className="Card__container__body__bottom__text">
                        <h5>{title || 'Titre article'}</h5>
                        <span>{content || 'Pas de contenu disponible.'}</span>
                        <span>{formattedDate || 'Date inconnue'}</span>
                    </div>
                </div>
                <p className='Card__container__body__bottom__view'>{views || 0} vues</p>
            </div>
        </Link>
    );
};

export default AllArticlesCard;
