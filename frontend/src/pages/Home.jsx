import React from 'react'
import { Navbar } from '../components/Navbar'
import fil from '../assets/fil.webp';
import sang from '../assets/sang.webp';
import ciseau from '../assets/ciseau.webp';
import temps from '../assets/homme.webp';
import rompu from '../assets/revenant.webp';
import croisés from '../assets/grace.webp';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home">
        <div className="Home__nav">
          <div className="Home__nav__section--left">
            <h2>Home</h2>
          </div>
          <div className="Home__nav__section--middle">
            <h2>News</h2><h2>Articles</h2><h2>Catégories</h2><h2>A Propos</h2><h2>Contact</h2>
          </div>
          <div className="Home__nav__section--right">

          </div>
        </div>
        <hr />
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
            <div className="Home__container__section--middle__cards">
              <div className="Home__container__section--middle__cards card-1">
                < h3 >
                  <span style={{ color: 'black' }}>Mes Moires</span><br />
                  <span>(dé)</span>
                  <span style={{ color: 'white' }}>génération</span><br />
                  <span style={{ color: 'red' }}>n</span>
                  <span>(elles)</span>
                </h3>

                {/* <img src={MdnL} alt="Description de l'image" /> */}
              </div>
              <div className="Home__container__section--middle__cards card-2">
                <img src="" alt="" />
              </div>
            </div>
            <div className="Home__container__section--middle__block">
              <h4>News</h4>
              <div className="Home__container__section--middle__block__cards">
                {/* Card */}
              </div>
            </div>
          </div>
          <div className="Home__container__section--right">
            <div className="Home__container__section--right__content">
              <h3>Articles populaires</h3>
              <p>Lorem Ipsum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In tincidunt tempor orci, vitae tincidunt nisl maximus vel.
                Maecenas in auctor risus.
                Sed convallis turpis quam, ut malesuada mauris euismod convallis. </p>
            </div>
            <div className="Home__container__section--right__cards">
              {/* Card */}
            </div>
          </div>
        </div>

      </div >
    </div >
  )
}
