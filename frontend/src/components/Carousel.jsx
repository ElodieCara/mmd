// import React, { useState } from 'react';

// const Carousel = ({ items = [], onCardClick, activeIndex = 0 }) => {
//     const [selectedIndex, setSelectedIndex] = useState(activeIndex);

//     if (!Array.isArray(items) || items.length === 0) {
//         return <div className="carousel__empty">Aucune donnée à afficher</div>;
//     }

//     const handleCardClick = (index) => {
//         setSelectedIndex(index);
//         if (onCardClick) {
//             onCardClick(items[index]);
//         }
//     };

//     return (
//         <div className="carousel">
//             {items.map((item, index) => (
//                 <div
//                     key={index}
//                     className={`carousel__card ${selectedIndex === index
//                         ? 'active'
//                         : index === selectedIndex - 1
//                             ? 'left'
//                             : index === selectedIndex + 1
//                                 ? 'right'
//                                 : ''}`}
//                     onClick={() => handleCardClick(index)}
//                     style={{
//                         backgroundImage: `url(${item.image})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 >
//                     <h2 className="carousel__card__title">{item.name}</h2>
//                     <p className="carousel__card__description">{item.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Carousel;
