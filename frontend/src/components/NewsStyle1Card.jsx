import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const NewsStyle1Card = ({ title, content, description, formattedDate, articleId, tags = [], category }) => {
    const navigate = useNavigate();

    const onTagClick = (tag) => {
        navigate(`/tags?tag=${tag}`);
    };

    const onCategoryClick = (category) => {
        navigate(`/categories?category=${category}`);
    };

    console.log("Catégorie reçue dans NewsStyle1Card :", category);


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

            {/* Main content */}
            <div className="Card__container__body__bottom">
                <div className="Card__container__body__bottom__text">
                    <h5>{title || 'Titre article'}</h5>
                    <span>{content || 'Pas de contenu disponible.'}</span>
                    <p>{description || 'Aucune description disponible.'}</p>
                </div>
            </div>

            {/* Footer */}
            <div className="Card__container__footer">
                <Button text="Voir plus" linkTo={`/article/${articleId}`} />
                <div className="Card__container__footer__date">
                    <span>{formattedDate || 'Date inconnue'}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsStyle1Card;
