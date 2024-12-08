import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      {!used && <div className="swipe-instruction">スワイプして使用済みにする</div>}

      <motion.div
        className="ticket-left"
        initial={false}
        animate={used ? { x: '-150%' } : { x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h3>{ticket.menuItem.name}</h3>
        <p>{ticket.menuItem.description}</p>
        <p>金額: ¥{ticket.menuItem.price}</p>
      </motion.div>

      <motion.div
        className="ticket-right"
        initial={false}
        animate={used ? { x: '150%' } : { x: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h3>{ticket.menuItem.name}</h3>
        <p>{ticket.menuItem.description}</p>
        <p>金額: ¥{ticket.menuItem.price}</p>
      </motion.div>

      {used && (
        <>
          <motion.div
            className="glow-effect"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 0.2, 0.8] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <div className="used-label">使用済み</div>
        </>
      )}
    </div>
  );
};

export default DigitalTicket;
