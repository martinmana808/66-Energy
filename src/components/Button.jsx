import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component className={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;
