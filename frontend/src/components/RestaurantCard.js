import React from 'react';
import './../styles/RestaurantCard.css';  // カード用のCSS

const RestaurantCard = ({ restaurant, onSelect }) => {
  return (
    <div className="restaurant-card" onClick={() => onSelect(restaurant.id)}>
      <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
      <div className="restaurant-details">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
