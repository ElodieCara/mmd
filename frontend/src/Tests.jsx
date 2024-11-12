<><div className="Card__container__top">
    <div className="Card__container__top__date">
        <span className="date-number">{dateObj.getDate()}</span>
        <span className="date-month">{dateObj.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
    </div>
    <div className="Card__container__top__button">
        <div className="red-circle"></div>
    </div>
</div><div className="Card__container__body">
        {/* Section Image */}
        <div className="Card__container__body__image">
            <img src={image} alt={title || 'Image'} />
        </div>

        {/* Section Bottom avec texte, description et vues */}
        <div className="Card__container__body__bottom">
            <div className="Card__container__body__bottom__text">
                <h5>{title || 'Titre article'}</h5>
                <p>{description || 'Aucune description disponible.'}</p> {/* Afficher la description */}
            </div>
        </div>
        <p className='Card__container__body__bottom__view'>{views || 0} vues</p>
    </div></>

