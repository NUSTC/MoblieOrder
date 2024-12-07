import React from 'react';
import './../styles/OrderConfirmation.css';

const OrderConfirmation = ({ cart, onOrder }) => {
  // 合計金額を計算
  const calculateTotal = () => {
    return cart.reduce((total, menu) => total + menu.price, 0);
  };

  const handleOrder = () => {
    // 注文を確定し、処理を進める
    onOrder();
  };

  return (
    <div className="order-confirmation">
      <h2>注文確認</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>数量: 1</p>
              <p>¥{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>合計金額: ¥{calculateTotal()}</h3>
      </div>
      <button onClick={handleOrder} className="order-button">
        注文する
      </button>
    </div>
  );
};

export default OrderConfirmation;
