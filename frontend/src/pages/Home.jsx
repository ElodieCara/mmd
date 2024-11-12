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
import { SecondaryNav } from '../components/SecondaryNav';
import { Button } from '../components/Button';
import DistributeCards from '../utils/DistributeCards';

export default function Home() {
  const [articleData, setArticleData] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(8); // Limite initiale à 6 articles
  const maxPopularArticles = 4; // Limite à 6 articles pour les articles populaires

  const getNewsCardStyle = (index) => {
    const styles = ["Card--news-style1", "Card--news-style2", "Card--news-style4", "Card--news-style3", "Card--news-style2", "Card--news-style1"];
    return styles[index % styles.length]; // Répartir les styles en fonction de l'index
  };

  // Récupérer les articles depuis le backend avec Axios
  useEffect(() => {
    axios.get('http://localhost:5001/api/articles')  // Appel à ton backend
      .then(response => {
        setArticleData(response.data);  // Mets à jour l'état avec les articles récupérés
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des articles:', error);  // Affiche l'erreur en cas de problème
      });
  }, []);

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

  const handleShowMore = () => {
    setDisplayedArticles(displayedArticles + 6); // Affiche 6 articles supplémentaires à chaque clic
  };

  return (
    <div>
      <Navbar />
      {/* ------------- Nav ------------- */}
      <div className="Home">
        <SecondaryNav />
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

            {/* ---------- Middle Section ------------ */}
            <div className="Home__container__section--middle__block">
              <hr />
              <h4>News</h4>
              <div className="Home__container__section--middle__block__cards">
                {DistributeCards(articleData.slice(0, displayedArticles), 4).map((column, colIndex) => (
                  <div key={colIndex} className="column">
                    {column.map((article, index) => {
                      const globalIndex = colIndex * 8 + index; // Calcul d'un index unique pour chaque carte
                      return (
                        <Card
                          key={article._id}
                          className={`Card ${getNewsCardStyle(globalIndex)}`} // Utilise globalIndex pour les styles uniques
                          type={getNewsCardStyle(globalIndex)}
                          title={article.title}
                          createdAt={article.createdAt}
                          content={article.content}
                          description={article.description}
                          image={article.image}
                          views={article.views}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              {/* Bouton Voir Plus */}
              {
                displayedArticles < articleData.length && (
                  <div className="see-more-container btn">
                    <Button
                      text="Voir plus d'articles"
                      onClick={handleShowMore}
                      linkTo="/all-articles" />
                  </div>
                )
              }
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
              <>
                {console.log(mostViewedArticle.image)}
                <Card
                  className="Card--highlight"
                  createdAt={mostViewedArticle.createdAt}
                  title={mostViewedArticle.title}
                  type="highlight"
                  image={mostViewedArticle.image}
                  views={mostViewedArticle.views}
                  onClick={() => handleClick(mostViewedArticle._id)} // Gestion du clic
                />
              </>
            )}
            {/* Affichage des articles */}
            <div className="Home__container__section--right__cards">

              {otherArticles.slice(0, maxPopularArticles).map((article) => (
                <Card
                  key={article._id}
                  className="Card--popular"
                  date={article.date}
                  type="popular"
                  title={article.title}
                  image={article.image}
                  views={article.views}
                  onClick={() => handleClick(article._id)} // Gérer le clic
                />
              ))}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}
