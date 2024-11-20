import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Category = ({ articles = [] }) => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    if (!articles || articles.length === 0) {
        return <p>Aucun article disponible pour le moment.</p>;
    }

    const filteredArticles = articles.filter((article) => article.category === category);

    return (
        <div className="category-explorer">
            <h1>Articles pour la catégorie : {category || "Aucune catégorie sélectionnée"}</h1>
            <ul>
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <li key={article._id}>{article.title}</li>
                    ))
                ) : (
                    <p>Aucun article trouvé pour cette catégorie.</p>
                )}
            </ul>
        </div>
    );
};

export default Category;
