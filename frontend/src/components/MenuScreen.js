import React, { useEffect, useState } from 'react';
import './../styles/MenuScreen.css';

const MenuScreen = ({ restaurantId, onAddToCart, cart }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = () => {
      if (restaurantId === 1) {
        setMenu([
          { id: 1, name: 'カレー', price: 500 },
          { id: 2, name: 'かつ丼', price: 600 },
        ]);
      } else if (restaurantId === 2) {
        setMenu([
          { id: 1, name: 'からあげ丼チーズ', price: 600 },
          { id: 2, name: 'ラーメン', price: 400 },
        ]);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  return (
    <div className="menu-screen">
      <h2>メニュー</h2>
      <div className="menu-list">
        {menu.map(item => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>¥{item.price}</p>
            </div>
            <button onClick={() => onAddToCart(item)}>カートに追加</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuScreen;
