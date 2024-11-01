import React, { useState } from 'react';
import IconEyes from '../assets/Eye.png';

export const Navbar = () => {
    // État pour gérer le thème actuel (clair ou sombre)
    const [isDarkMode, setIsDarkMode] = useState(false);
    // Fonction pour basculer entre le mode clair et sombre

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Ajouter ou retirer la classe 'dark-mode' au body
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className='Navbar'>
            <div className='Navbar__container'>
                <div className='Navbar__container__mmd'>
                    <span className='Navbar__container__mmd__phare'>Mes Moires
                        <div className="Navbar__container__mmd__phare__circles-container">
                            {['red', 'red', 'red', 'white', 'red'].map((color, index) => (
                                <div key={index} className={`circle ${color}`}>
                                </div>
                            ))}
                        </div>
                    </span>
                    <span className='Navbar__container__mmd__white'>(Dé)</span>
                    <span className='Navbar__container__mmd__white'>Génération</span>
                    <span className='Navbar__container__mmd__red'>n</span>
                    <span className='Navbar__container__mmd__white'>(elles)</span>
                </div>
                <div className='Navbar__container__content'>
                    <div className='Navbar__container__content__social'>
                        <span>Instagram</span>
                        <span className='Navbar__container__content__social__red'>X</span>
                        <span>Pinterest</span>
                    </div>
                    <div className='Navbar__container__content__icon'>
                        <img src={IconEyes} alt="Icon Eyes" />
                    </div>
                    <div className='Navbar__container__content__switcher'>
                        <label className="Navbar__container__content__switcher-switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                            <span className="Navbar__container__content__switcher-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
