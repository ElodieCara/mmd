import React from 'react';
import HighlightCard from './HighlightCard';
import PopularCard from './PopularCard';
import NewsStyle1Card from './NewsStyle1Card';
import NewsStyle2Card from './NewsStyle2Card';
import NewsStyle3Card from './NewsStyle3Card';
import NewsStyle4Card from './NewsStyle4Card';
import AllArticlesCard from './AllArticlesCard';
import CategoryCard from './CategoryCard'; // Vérifiez bien que ce composant existe

export const Card = ({
    className = '',
    title,
    createdAt,
    image,
    views,
    description,
    content,
    articleId,
    type,
    tags = [],
    category
}) => {
    console.log("Category reçue dans Card :", { title, category, tags });
    const dateObj = createdAt ? new Date(createdAt) : null;
    const formattedDate = dateObj && !isNaN(dateObj)
        ? className.includes('Card--news-style')
            ? `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`
            : `${dateObj.getDate()} ${dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}`
        : 'N/A';

    const renderContentByType = () => {
        switch (type) {
            case 'highlight':
                return <HighlightCard title={title} content={content} image={image} views={views} articleId={articleId} dateObj={dateObj} />;
            case 'popular':
                return <PopularCard title={title} content={content} image={image} views={views} />;
            case 'Card--news-style1':
                return <NewsStyle1Card title={title} tags={tags} category={category} content={content} description={description} formattedDate={formattedDate} articleId={articleId} />;
            case 'Card--news-style2':
                return <NewsStyle2Card title={title} tags={tags} category={category} image={image} articleId={articleId} />;
            case 'Card--news-style3':
                return <NewsStyle3Card title={title} tags={tags} category={category} image={image} formattedDate={formattedDate} />;
            case 'Card--news-style4':
                return <NewsStyle4Card title={title} tags={tags} category={category} content={content} description={description} image={image} articleId={articleId} />;
            case 'allarticles':
                return <AllArticlesCard image={image} title={title} category={category} content={content} articleId={articleId} dateObj={dateObj} />;
            case 'category-card': // Ajout du rendu pour `CategoryCard`
                return <CategoryCard image={image} title={title} content={content} articleId={articleId} />;
            default:
                return <NewsStyle1Card title={title} content={content} formattedDate={formattedDate} articleId={articleId} />;
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
