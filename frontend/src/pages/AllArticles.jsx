import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { SecondaryNav } from "../components/SecondaryNav";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb"; // Importez le fil d'Ariane

export default function AllArticles() {
    const [articles, setArticles] = useState([]); // Articles depuis l'API
    const [currentPage, setCurrentPage] = useState(1); // Page actuelle
    const [sortBy, setSortBy] = useState("date"); // Critère de tri

    const articlesPerPage = 5; // Nombre d'articles par page
    const totalPages = Math.ceil(articles.length / articlesPerPage); // Calcul du nombre total de pages

    // Charger les articles depuis l'API
    useEffect(() => {
        axios
            .get("http://localhost:5001/api/articles")
            // .then((response) => setArticles(response.data))
            .then((response) => {
                console.log("Données reçues depuis l'API :", response.data);
                setArticles(response.data);
            })
            .catch((error) => console.error("Erreur lors de la récupération des articles:", error));
    }, []);

    // Fonction pour calculer les articles affichés selon la pagination et le tri
    const getPaginatedArticles = () => {
        const sortedArticles = [...articles].sort((a, b) => {
            switch (sortBy) {
                case "date":
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case "views":
                    return b.views - a.views;
                case "title":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        const startIndex = (currentPage - 1) * articlesPerPage;
        return sortedArticles.slice(startIndex, startIndex + articlesPerPage);
    };

    // Changer de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Navbar />
            <SecondaryNav />
            <div className="all-articles">
                <Breadcrumb />
                <h1 className="all-articles__title">Tous nos articles</h1>
                {currentPage > 1 && <h2 className="all-articles__title__subtitle">Page {currentPage}</h2>}

                {/* Bar de tri */}
                <div className="all-articles__sort-bar">
                    <h3>Trier par :</h3>
                    <div className="all-articles__sort-bar__buttons">
                        <button
                            className={`all-articles__sort-bar__button ${sortBy === "date" ? "active" : ""}`}
                            onClick={() => setSortBy("date")}
                        >
                            Date
                        </button>
                        <button
                            className={`all-articles__sort-bar__button ${sortBy === "views" ? "active" : ""}`}
                            onClick={() => setSortBy("views")}
                        >
                            Vues
                        </button>
                        <button
                            className={`all-articles__sort-bar__button ${sortBy === "title" ? "active" : ""}`}
                            onClick={() => setSortBy("title")}
                        >
                            Titre
                        </button>
                    </div>
                </div>

                {/* Articles */}
                <div className="all-articles__container">
                    {getPaginatedArticles().map((article) => (
                        <Card
                            className="all-articles__container__cards"
                            type="allarticles"
                            key={article._id}
                            title={article.title}
                            content={article.content}
                            description={article.description}
                            image={article.image}
                            formattedDate={
                                article.createdAt
                                    ? new Date(article.createdAt).toLocaleDateString()
                                    : "Date inconnue"
                            }
                            articleId={article._id}
                            views={article.views}
                            tags={article.tags}
                            category={article.category}
                        />
                    ))}
                </div>


                {/* Pagination en bas */}
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
}
