import React, { useEffect, useState } from 'react';
import './../styles/MenuScreen.css';
import axios from 'axios';

const MenuScreen= () => {
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
                {menus.map(menu => (
                    <li key={menu.id}>
                        <h2>{menu.name}</h2>
                        <p>価格: {menu.price}円</p>
                        <p>{menu.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuScreen;
