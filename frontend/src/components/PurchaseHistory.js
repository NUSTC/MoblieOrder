import React from 'react';
import './../styles/PurchaseHistory.css';

const PurchaseHistory = ({ tickets }) => {
  return (
    <div className="purchase-history">
      <h2>購入履歴</h2>
      <div className="ticket-list">
        {tickets.length === 0 ? (
          <p>購入履歴はありません。</p>
        ) : (
          tickets.map(ticket => (
            <div
              key={ticket.id}
              className={`ticket-item ${ticket.used ? 'used' : ''}`}
            >
              <div className="ticket-info">
                <h3>{ticket.menuItem.name}</h3>
                <p>{ticket.menuItem.description}</p>
                <p>金額: ¥{ticket.menuItem.price}</p>
              </div>
              <div className={`status ${ticket.used ? 'used' : 'unused'}`}>
                {ticket.used ? '使用済み' : '未使用'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
