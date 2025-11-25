import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Caffeine, <span className="text-accent">re-engineered.</span>
          </h1>
          <p className="hero__subtitle">
            Clean energy in a single effervescent tablet. Zero sugar, smooth focus, and sustained performance without the crash.
          </p>
          <ul className="hero__benefits">
            <li>Clean formula, zero sugar</li>
            <li>Smooth focus, less jitters</li>
            <li>Pocket-sized, dissolves anywhere</li>
          </ul>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">Get 66 ENERGY</Button>
            <Button href="#how-it-works" variant="secondary">How it works</Button>
          </div>
        </div>
        <div className="hero__image-wrapper">
          {/* Placeholder for product image */}
          <div className="hero__image-placeholder">
            <div className="hero__tablet"></div>
            <div className="hero__glass"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
