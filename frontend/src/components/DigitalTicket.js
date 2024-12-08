import React, { useState } from 'react';

import './../styles/DigitalTicket.css';

const DigitalTicket = ({ ticket, onUse }) => {
  const [used, setUsed] = useState(false);

  const handleSwipe = () => {
    if (!used) {
      setUsed(true);
      onUse(ticket.id); // 使用済みを親コンポーネントに通知
    }
  };

  return (
    <div className={`digital-ticket ${used ? "used" : ""}`} onClick={handleSwipe}>
      <div className="ticket-left">
        <h3>{ticket.menuItem.name}</h3>
        <p>{ticket.menuItem.description}</p>
        <p>金額: ¥{ticket.menuItem.price}</p>
      </div>
      <div className="ticket-right">
        <h3>{ticket.menuItem.name}</h3>
        <p>{ticket.menuItem.description}</p>
        <p>金額: ¥{ticket.menuItem.price}</p>
      </div>
      {used && <div className="used-label">使用済み</div>}
      {!used && <div className="swipe-instruction">スワイプして使用済みにする</div>}
    </div>
  );
};

export default DigitalTicket;
