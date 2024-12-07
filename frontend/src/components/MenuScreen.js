import React, { useEffect, useState } from 'react';
import './../styles/MenuScreen.css';
import axios from 'axios';

const MenuScreen= ({munes, onAddToCart}) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        // Django APIからデータを取得
        axios.get('http://localhost:8000/api/menus/')
            .then(response => {
                setMenus(response.data);
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    }, []);

    return (
        <div>
            <h1>食堂メニュー</h1>
            <ul>
                {menus
                .filter(menu => menu.restaurant === 3) // restaurant が 1 のものだけを選択
                .map(menu => (
                    
                    <li key={menu.id}>
                        <button onClick={() => onAddToCart(menu)}>{menu.name}</button>
                        <img src={`http://localhost:8000${menu.image}`} alt={menu.name} className="menu-image" />
                        <p>価格: {menu.price}円</p>
                    </li>
                    

                ))}
            </ul>
        </div>
    );
};

export default MenuScreen;
