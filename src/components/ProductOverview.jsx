import React from 'react';
import Section from './Section';
import './ProductOverview.css';

const ProductOverview = () => {
  return (
    <Section id="product" className="product-overview">
      <div className="product-overview__content">
        <h2 className="section-title">What is 66 ENERGY?</h2>
        <p className="section-description">
          A flavoured effervescent caffeine tablet designed for modern performance.
          No sugar, no heavy additives, just clean, calibrated energy.
        </p>
        <div className="product-overview__grid">
          <div className="product-feature">
            <span className="product-feature__number">01</span>
            <h3>Effervescent Format</h3>
            <p>Drop, dissolve, drink. A ritual that prepares you for focus.</p>
          </div>
          <div className="product-feature">
            <span className="product-feature__number">02</span>
            <h3>Zero Sugar</h3>
            <p>All the flavor, none of the crash or insulin spike.</p>
          </div>
          <div className="product-feature">
            <span className="product-feature__number">03</span>
            <h3>Calibrated Dose</h3>
            <p>Precise caffeine content for consistent results.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProductOverview;
