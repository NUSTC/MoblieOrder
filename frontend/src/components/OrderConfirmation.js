import React from "react";
import "./../styles/OrderConfirmation.css";

const OrderConfirmation = ({ cart, onOrder }) => {
  // 合計金額を計算
  const totalAmount = cart.reduce((total, menu) => total + parseFloat(menu.price), 0);

  // 注文確定の処理
  const handleOrder = () => {
    onOrder();
  };

  return (
    <div className="order-confirmation">
      {/* ヘッダー */}
      <h2 className="order-confirmation-title">注文確認</h2>

      {/* カートアイテム一覧 */}
      <div className="order-confirmation-items">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <div className="order-item-info">
              <h3 className="order-item-name">{item.name}</h3>
              <p className="order-item-quantity">数量: 1</p>
              <p className="order-item-price">¥{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 合計金額 */}
      <div className="order-confirmation-total">
        <h3>合計金額: ¥{totalAmount}</h3>
      </div>

      {/* 注文ボタン */}
      <button onClick={handleOrder} className="order-confirmation-button">
        注文する
      </button>
    </div>
  );
};

export default OrderConfirmation;
