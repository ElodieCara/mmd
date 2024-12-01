import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import temps from '../assets/homme.webp';
import croisés from '../assets/grace.webp';
import rompu from '../assets/revenant.webp';
import { SecondaryNav } from '../components/SecondaryNav';
import Breadcrumb from '../components/Breadcrumb';
import CategoryCard from '../components/CategoryCard';
import Pagination from '../components/Pagination';
import MesMoires from '../assets/MesMoires.webp';
import CRouge from '../assets/chaperonRouge.png';
import cadre from '../assets/cadre.png';
import fond from '../assets/fondcat.webp';

const sliderSections = [
    {
        id: "Lachesis",
        name: "Lachesis",
        title: "Lachesis : La mesure du fil.",
        description: "Découvrez les récits soigneusement mesurés par Lachesis. Ici, chaque chapitre du blog explore le déroulement des histoires et des thèmes qui tissent la vie. Plongez dans les choix déterminants et les bifurcations du destin, où chaque ligne et chaque mot portent un sens profond.",
        image: "lachesis.jpg", // Remplacez par une vraie image
    },
    {
        id: "Atropos",
        name: "Atropos",
        title: "Atropos : La fin des histoires.",
        description: "Entrez dans le domaine d'Atropos, où chaque histoire trouve sa conclusion. Dans cette section du blog, nous explorons les fins — des dénouements captivants aux conclusions inattendues. Laissez-vous guider à travers les thèmes de la transformation, de la perte et des révélations finales.",
        image: "atropos.jpg", // Remplacez par une vraie image
    },
    {
        id: "Clotho",
        name: "Clotho",
        title: "Clotho : Le fil des commencements.",
        description: "Bienvenue dans l'univers de Clotho, la fileuse des débuts. Dans cette section du blog, nous explorons les origines et les inspirations. Découvrez les idées émergentes, les nouvelles perspectives et les histoires qui prennent vie avec passion et créativité.",
        image: "clotho.jpg", // Remplacez par une vraie image
    },
];

const categories = [
    {
        name: "Fil du temps",
        image: temps,
        description: "Explorez le passé, le présent et l'avenir.",
        definition: "Le Fil du temps symbolise la continuité de la vie. Découvrez des histoires qui explorent les liens entre le passé, le présent et l'avenir, où chaque moment est une pièce d'un puzzle plus vaste.",
    },
    {
        name: "Fil croisés",
        image: croisés,
        description: "Des histoires où les destins se croisent.",
        definition: "Les Fils croisés racontent des histoires d'interconnexions, où des vies se rencontrent et s'entrelacent, créant des récits captivants sur les relations humaines et les choix partagés.",
    },
    {
        name: "Fil rompu",
        image: rompu,
        description: "Découvrez des récits brisés et leurs mystères.",
        definition: "Le Fil rompu représente des histoires de perte, de mystère et de résilience, où les personnages affrontent des défis pour reconstruire ou redéfinir leur existence.",
    },
];

const CategoriesPage = () => {

    const [selectedCategory, setSelectedCategory] = useState("Fil croisés");
    const [selectedCategoryDefinition, setSelectedCategoryDefinition] = useState(
        categories.find((category) => category.name === "Fil croisés").definition);
    const [activeTag, setActiveTag] = useState("Lachesis"); // Tag par défaut
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0); // Index pour le carousel

    const articlesPerPage = 3; // Nombre d'articles visibles à la fois



    const handleCarouselLeft = () => {
        if (carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
        }
    };

    const handleCarouselRight = () => {
        if (carouselIndex < Math.ceil(filteredArticles.length / articlesPerPage) - 1) {
            setCarouselIndex(carouselIndex + 1);
        }
    };

    const handleMoveUp = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setActiveTag(sliderSections[newIndex].name);
        }
    };

    const handleMoveDown = () => {
        if (currentIndex < sliderSections.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setActiveTag(sliderSections[newIndex].name);
        }
    };

    // Commence à déplacer
    const handleDragStart = () => {
        setIsDragging(true);
        document.addEventListener("mousemove", handleDragMove);
        document.addEventListener("mouseup", handleDragEnd);
    };

    // Déplacement en cours
    const handleDragMove = (e) => {
        if (!isDragging) return;

        const track = document.querySelector('.categories__slider__track');
        const rect = track.getBoundingClientRect();
        const position = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
        const newIndex = Math.round((position / rect.height) * (sliderSections.length - 1));

        if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
            setActiveTag(sliderSections[newIndex].name);
        }
    };

    // Arrête de déplacer
    const handleDragEnd = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
    };

    const handleSliderChange = (index) => {
        setSliderPosition(index);
    };

    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.name);
        setSelectedCategoryDefinition(category.definition);
        setCarouselIndex(0); // Réinitialise le carousel lorsque la catégorie change
    };

    useEffect(() => {
        // Charger tous les articles
        axios.get('http://localhost:5001/api/articles')
            .then((response) => {
                setArticles(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des articles :", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (selectedCategory && activeTag) {
            const filtered = articles.filter(
                (article) =>
                    article.category === selectedCategory && // Vérifie la catégorie
                    article.tags.includes(activeTag) // Vérifie le tag
            );
            setFilteredArticles(filtered);
            setCarouselIndex(0);
        } else {
            setFilteredArticles([]); // Aucune correspondance
        }
    }, [selectedCategory, activeTag, articles]); // Ajout de `activeTag` dans les dépendances


    // Articles paginés
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

    // Changer de page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (

        <div className="categories"
            onMouseMove={handleDragMove} // Déplacement en cours
            onMouseUp={handleDragEnd} // Relâchement
        >
            <Navbar />
            <SecondaryNav />

            <div className="categories__header">
                <Breadcrumb />
                <div className="categories__header--frame">
                    <h1>catégories</h1>

                    <div className="categories__header__content">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`categories__header__content__card ${selectedCategory === category.name
                                    ? 'active'
                                    : index === 0
                                        ? 'left'
                                        : index === 2
                                            ? 'right'
                                            : ''
                                    }`}
                                onClick={() => {
                                    setSelectedCategory(category.name); // Conserve la logique initiale
                                    setSelectedCategoryDefinition(category.definition); // Ajoute la définition correspondante
                                }}
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <h2 >{category.name}</h2>
                                <p >{category.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="categories__description">
                        <div style={{
                            background: `url(${cadre}) no-repeat center`,
                            backgroundSize: '80%',
                            width: '250px',
                            height: "50px"
                        }}>
                        </div>

                        <div className="categories__description__definition"
                        >
                            <p>{selectedCategoryDefinition}</p>
                        </div>

                        <div className="categories__description__container">
                            {/* Image en background */}
                            <div
                                className="categories__description__container__img"
                                style={{
                                    backgroundImage: `url(${CRouge})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            {/* Contenu textuel */}
                            <div className="categories__description__content">
                                <p>{sliderSections[currentIndex].title}</p>
                                <hr />
                                <p>{sliderSections[currentIndex].description}</p>
                                <div className="categories__carousel">
                                    <button
                                        className="carousel-button left"
                                        onClick={handleCarouselLeft}
                                        disabled={carouselIndex === 0}
                                    >
                                        ◀
                                    </button>
                                    {filteredArticles.length > 0 ? (
                                        filteredArticles
                                            .slice(carouselIndex * articlesPerPage, (carouselIndex + 1) * articlesPerPage)
                                            .map((article) => (
                                                <div key={article._id} className="carousel-card">
                                                    <div
                                                        className="carousel-card__content"
                                                        style={{
                                                            backgroundImage: `url(${article.image || MesMoires})`,
                                                        }}
                                                    >
                                                        <h3>{article.title}</h3>
                                                        <p>{article.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                    ) : (
                                        <p>Aucun article trouvé pour cette catégorie et ce tag.</p>
                                    )}
                                    <button
                                        className="carousel-button right"
                                        onClick={handleCarouselRight}
                                        disabled={carouselIndex >= Math.ceil(filteredArticles.length / articlesPerPage) - 1}
                                    >
                                        ▶
                                    </button>
                                </div>
                            </div>
                            <div className="categories__slider">
                                <button
                                    className="categories__slider__arrow categories__slider__arrow--up"
                                    onClick={handleMoveUp}
                                    disabled={currentIndex === 0}
                                >
                                    ▲
                                </button>
                                <div className="categories__slider__track">
                                    <div
                                        className="categories__slider__button"
                                        style={{
                                            top: `${(100 / (sliderSections.length - 1)) * currentIndex}%`,
                                        }}
                                        onMouseDown={handleDragStart} // Début du drag
                                        onMouseUp={handleDragEnd} // Fin du drag
                                    >
                                        {sliderSections[currentIndex].name}
                                    </div>
                                </div>
                                <button
                                    className="categories__slider__arrow categories__slider__arrow--down"
                                    onClick={handleMoveDown}
                                    disabled={currentIndex === sliderSections.length - 1}
                                >
                                    ▼
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div >
    );
};

export default CategoriesPage;
