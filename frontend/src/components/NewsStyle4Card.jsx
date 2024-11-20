import React from 'react';
import { useNavigate } from 'react-router-dom';
import cheval from '../assets/cheval.webp';
import { Button } from './Button';

const NewsStyle4Card = ({ title, content, description, image = cheval, articleId, tags = [], category }) => {
    const navigate = useNavigate();

    const onTagClick = (tag) => {
        navigate(`/articles?tag=${tag}`); // Naviguer vers les articles associés au tag
    };

    return (
        <div className="Card__container__body">
            <div className="Card__container__body__tags">
                {/* Catégorie */}
                <button
                    className="card__category"
                    onClick={() => onCategoryClick(category)}
                >
                    {category || "Non classé"}
                </button>
                {/* Tags */}
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className="card__tag"
                        onClick={() => onTagClick(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="Card__container__body__bottom">
                <div className="Card__container__body__bottom__text">
                    <h5>{title || 'Titre article'}</h5>
                    {/* <p>{content || 'Pas de contenu disponible.'}</p>
                    <p>{description || 'Aucune description disponible.'}</p> */}
                </div>
                <Button text="Voir plus" linkTo={`/article/${articleId}`} />
            </div>
            {/* Image */}
            <div className="Card__container__body__image">
                <img src={image} alt={title || 'Image'} />
            </div>



        </div>
    );
};

export default NewsStyle4Card;
