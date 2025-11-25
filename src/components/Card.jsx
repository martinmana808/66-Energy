import React from 'react';
import './Card.css';

const Card = ({ title, children, className = '', icon: Icon }) => {
  return (
    <div className={`card ${className}`}>
      {Icon && (
        <div className="card__icon">
          <Icon size={32} />
        </div>
      )}
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
