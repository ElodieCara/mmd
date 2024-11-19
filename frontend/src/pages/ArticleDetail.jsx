import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
    const { articleId } = useParams(); // Récupère l'ID de l'article depuis l'URL
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Appel à l'API pour récupérer les détails de l'article
        axios.get(`http://localhost:5001/api/articles/${articleId}`)
            .then((response) => {
                setArticle(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération de l'article:", error);
            });
    }, [articleId]);

    if (!article) {
        return <p>Chargement...</p>; // Affichage pendant le chargement
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title} />
            <p>{article.content}</p>
            <span>{article.views} vues</span>
        </div>
    );
};

export default ArticleDetail;
