import React, { useState, useEffect } from 'react';
import './../styles/RestaurantList.css';

const RestaurantList = ({ onSelect }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // 仮のデータをロードする
    setRestaurants([
      { id: 1, name: 'リアン', description: 'R棟付近', imageUrl: '/images/restaurantA.jpg' },
      { id: 2, name: 'BISTRO CEZARS', description: 'S棟', imageUrl: '/images/restaurantB.jpg' },
      // 他のレストランデータを追加
    ]);
  }, []);

  const RestaurantCard = ({ restaurant }) => (
    <div className="restaurant-card" onClick={() => onSelect(restaurant.id)}>
      <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
      <div className="restaurant-details">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </div>
    </div>
  );

  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;