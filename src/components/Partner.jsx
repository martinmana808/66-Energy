import React from 'react';
import Button from './Button';
import Section from './Section';
import './Partner.css';

const Partner = () => {
  return (
    <Section id="partner" className="partner" background="light">
      <div className="partner__content">
        <h2 className="section-title text-dark">Start Your 66 Business</h2>
        <p className="section-description text-dark-muted">
          We're looking for experienced distributors, retailers, and entrepreneurs who want to bring 
          premium performance energy to their community.
        </p>
        
        <div className="partner__benefits">
          <div className="partner-benefit">
            <h3>High Demand</h3>
            <p>Tap into the growing market for clean, functional supplements.</p>
          </div>
          <div className="partner-benefit">
            <h3>Premium Brand</h3>
            <p>Align with a modern, high-end aesthetic that stands out.</p>
          </div>
          <div className="partner-benefit">
            <h3>Easy Logistics</h3>
            <p>Compact product format means low shipping and storage costs.</p>
          </div>
        </div>

        <div className="partner__cta">
          <Button href="#contact" variant="primary" className="btn--partner">
            Become a Partner
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Partner;
