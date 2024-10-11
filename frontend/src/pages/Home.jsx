import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import MdnL from '../assets/MdnL.jpg';
import MesMoires from '../assets/MesMoires.webp';
import fil from '../assets/fil.webp';
import sang from '../assets/sang.webp';
import ciseau from '../assets/ciseau.webp';
import temps from '../assets/homme.webp';
import rompu from '../assets/revenant.webp';
import croisés from '../assets/grace.webp';
import { Card } from '../components/Card';

// Exemple de données d'articles (simulé au départ)
const articles = [
  { id: 1, title: "Article 1", image: MdnL, views: 150 },
  { id: 2, title: "Article 2", image: MesMoires, views: 500 },
  { id: 3, title: "Article 3", image: fil, views: 300 },
];

export default function Home() {
  const [articleData, setArticleData] = useState(articles);

  // Fonction pour gérer l'incrémentation des clics
  const handleClick = async (id) => {
    try {
      // Envoyer une requête POST au backend pour enregistrer le clic
      await axios.post('http://localhost:5001/api/articles/views', { articleId: id });

      // Mettre à jour localement le nombre de vues (optionnel)
      const updatedArticles = articleData.map((article) => {
        if (article.id === id) {
          return { ...article, views: article.views + 1 };
        }
        return article;
      });

      // Mise à jour des articles après clic
      setArticleData(updatedArticles);

    } catch (error) {
      console.error("Erreur lors de l'envoi des clics au backend :", error);
    }
  };

  // Trier les articles par vues
  const sortedArticles = [...articleData].sort((a, b) => b.views - a.views);
  const mostViewedArticle = sortedArticles.length > 0 ? sortedArticles[0] : null; // Article avec le plus de vues
  const otherArticles = sortedArticles.slice(1); // Les autres articles

  return (
    <div>
      <Navbar />
      {/* ------------- Nav ------------- */}
      <div className="Home">
        <div className="Home__nav">
          <div className="Home__nav-left">
            <h2>Home</h2>
          </div>
          <div className="Home__nav-middle">
            <h2>News</h2><h2>Articles</h2><h2>Catégories</h2><h2>A Propos</h2><h2>Contact</h2>
          </div>
          <div className="Home__nav-right">
            <img src="" alt="" />
          </div>
        </div>
        <hr />
        {/* ------------- Home ------------- */}
        <div className="Home__container">
          <div className="Home__container__section--left">
            <h3>Catalogue</h3>
            <div className="Home__container__section--left__content">
              <div className='Home__container__section--left__content__card--hastag'
                style={{ backgroundImage: `url(${fil})` }}>
                <h4>#Lachesis</h4>
              </div>
              <div className='Home__container__section--left__content__card--hastag'
                style={{ backgroundImage: `url(${sang})` }}>
                <h4>#Atropos</h4>
              </div>
              <div className='Home__container__section--left__content__card--hastag'
                style={{ backgroundImage: `url(${ciseau})` }}>
                <h4>#Clotho</h4>
              </div>
            </div>
            <div className="Home__container__section--left__description">
              <p>#Clotho
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt tempor orci,
                vitae tincidunt nisl maximus vel. Maecenas in auctor risus. Sed convallis turpis quam,
                ut malesuada mauris euismod convallis.</p>
            </div>
            <div className="Home__container__section--left__catalogue">
              <div className="Home__container__section--left__catalogue__card"
                style={{ backgroundImage: `url(${temps})` }}>
                <img src="" alt="" />
                <h4>Fil du temps</h4>
              </div>
              <div className="Home__container__section--left__catalogue__card"
                style={{ backgroundImage: `url(${croisés})` }}>
                <img src="" alt="" />
                <h4>Fil croisés</h4>
              </div>
              <div className="Home__container__section--left__catalogue__card"
                style={{ backgroundImage: `url(${rompu})` }}>
                <img src="" alt="" />
                <h4>Fil rompu</h4>
              </div>
            </div>
          </div>
          <div className="Home__container__section--middle">
            <div className="Home__container__section--middle__cards ">
              <div className="Home__container__section--middle__cards card-1"
                style={{
                  backgroundImage: `url(${MdnL})`
                }}>
                < h3 >
                  <span style={{ color: 'black' }}>Mes Moires</span><br />
                  <span>(dé)</span>
                  <span style={{ color: 'white' }}>génération</span><br />
                  <span style={{ color: 'red' }}>n</span>
                  <span>(elles)</span>
                </h3>
              </div>
              <div className="Home__container__section--middle__cards card-2"
                style={{
                  backgroundImage: `url(${MesMoires})`
                }}>
                <img src="" alt="" />
              </div>
            </div>

            <div className="Home__container__section--middle__block">
              <hr />
              <h4>News</h4>
              <div className="Home__container__section--middle__block__cards">
                <Card className="Card Card--news" />
                <Card className="Card--news" />
                <Card className="Card--news" />
                <Card className="Card--news" />
                <Card className="Card--news" />
                <Card className="Card--news" />
              </div>
            </div>
          </div>
          {/* ----------- Right Section ------------ */}
          <div className="Home__container__section--right">
            <div className="Home__container__section--right__content">
              <h3>Articles populaires</h3>
              <p>Lorem Ipsum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In tincidunt tempor orci, vitae tincidunt nisl maximus vel.
                Maecenas in auctor risus.
                Sed convallis turpis quam, ut malesuada mauris euismod convallis.</p>
            </div>
            {/* Card spéciale pour l'article le plus populaire */}
            {mostViewedArticle && (
              <Card
                className="Card--highlight"
                title={mostViewedArticle.title}
                image={mostViewedArticle.image}
                views={mostViewedArticle.views}
                onClick={() => handleClick(mostViewedArticle.id)} // Gestion du clic
              />
            )}
            {/* Affichage des articles */}
            <div className="Home__container__section--right__cards">

              {otherArticles.map((article) => (
                <Card
                  key={article.id}
                  className="Card--popular"
                  title={article.title}
                  image={article.image}
                  views={article.views}
                  onClick={() => handleClick(article.id)} // Gérer le clic
                />
              ))}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
