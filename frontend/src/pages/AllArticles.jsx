import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';

export default function AllArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/api/articles')  // Appel à l'API pour récupérer les articles
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des articles:', error);
            });
    }, []);

    return (
        <div className="all-articles-page">
            <h1>Liste complète des articles</h1>
            <div className="articles-container">
                {articles.map(article => (
                    <Card
                        key={article._id}
                        title={article.title}
                        image={article.image}
                        views={article.views}
                    />
                ))}
            </div>
        </div>
    );
}
