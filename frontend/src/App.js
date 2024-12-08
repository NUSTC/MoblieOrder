import React, { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import MenuScreen from './components/MenuScreen';
import OrderConfirmation from './components/OrderConfirmation';
import DigitalTicket from './components/DigitalTicket';
import PurchaseHistory from './components/PurchaseHistory';
import './App.css';

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [viewHistory, setViewHistory] = useState(false);

  const handleRestaurantSelect = (id) => {
    setSelectedRestaurant(id);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleOrder = () => {
    setIsOrderConfirmed(true);
    // 仮の食券を作成（選択したメニューを基に）
    const newTickets = cart.map(item => ({
      id: item.id,
      menuItem: item,
      used: false,
    }));
    setTickets(newTickets);
  };

  const handleUseTicket = (ticketId) => {
    setTickets(tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, used: true } : ticket
    ));
  };

  const handleViewHistory = () => {
    setViewHistory(true);
  };

  return (
    <div className="app">
      <div className="container">
        {viewHistory ? (
          <PurchaseHistory tickets={tickets} />
        ) : isOrderConfirmed ? (
          <div>
            <h2>注文が完了しました。ありがとうございます！</h2>
            <div className="ticket-list">
              {tickets.map(ticket => (
                <DigitalTicket key={ticket.id} ticket={ticket} onUse={handleUseTicket} />
              ))}
            </div>
            <button onClick={handleViewHistory} className="view-history-button">
              購入履歴を見る
            </button>
          </div>
        ) : selectedRestaurant ? (
          <div>
            <MenuScreen
              onAddToCart={handleAddToCart}
            />
            <OrderConfirmation cart={cart} onOrder={handleOrder} />
          </div>
        ) : (
          <div>
            <h1>レストランを選択</h1>
            <RestaurantList onSelect={handleRestaurantSelect} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;