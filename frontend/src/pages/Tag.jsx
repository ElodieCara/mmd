import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Tag = ({ articles = [] }) => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");

    if (!articles || articles.length === 0) {
        return <p>Aucun article disponible pour le moment.</p>;
    }

    const filteredArticles = articles.filter((article) => article.tags.includes(tag));

    return (
        <div className="tag-explorer">
            <h1>Articles pour le tag : {tag || "Aucun tag sélectionné"}</h1>
            <ul>
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <li key={article._id}>{article.title}</li>
                    ))
                ) : (
                    <p>Aucun article trouvé pour ce tag.</p>
                )}
            </ul>
        </div>
    );
};

export default Tag;
