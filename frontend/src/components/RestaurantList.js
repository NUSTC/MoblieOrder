import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
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
  
  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <RestaurantCard 
          key={restaurant.id} 
          restaurant={restaurant} 
          onSelect={onSelect} 
        />
      ))}
    </div>
  );
};

export default RestaurantList;
