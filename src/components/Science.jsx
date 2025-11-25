import React from 'react';
import Section from './Section';
import './Science.css';

const Science = () => {
  return (
    <Section id="science" className="science" background="default">
      <div className="science__content">
        <h2 className="section-title">The Science</h2>
        <p className="section-description">
          A synergistic blend of caffeine and supporting compounds for optimal cognitive state.
        </p>

        <div className="science__grid">
          <div className="science-card">
            <h3>Caffeine</h3>
            <p className="science-card__role">Primary Driver</p>
            <p>
              Blocks adenosine receptors to reduce fatigue and improve alertness. 
              We use a calibrated dose for peak performance without the jitters.
            </p>
          </div>
          <div className="science-card">
            <h3>L-Theanine</h3>
            <p className="science-card__role">Modulator</p>
            <p>
              Promotes relaxation without drowsiness. When paired with caffeine, 
              it smooths out the energy curve and enhances focus.
            </p>
          </div>
          <div className="science-card">
            <h3>B-Vitamins</h3>
            <p className="science-card__role">Support</p>
            <p>
              Essential for energy metabolism and brain function. 
              Supports the body's natural energy production pathways.
            </p>
          </div>
        </div>

        <div className="science__disclaimer">
          <p>
            *These statements have not been evaluated by the FDA. 
            This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Consult your physician before use if you have a medical condition.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Science;
