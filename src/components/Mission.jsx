import React from 'react';
import Section from './Section';
import './Mission.css';

const Mission = () => {
  return (
    <Section id="mission" className="mission" background="default">
      <div className="mission__content">
        <h2 className="section-title text-center">Our Philosophy</h2>
        <div className="mission__manifesto">
          <blockquote>
            "Energy is the architecture of achievement. Traditional energy drinks are loud, sugary, and chaotic. 
            66 ENERGY is about harmonious performance—precise, intentional, and balanced."
          </blockquote>
          <p>
            We believe in designing your state, not defaulting to it. Whether you're building a company, 
            training for a marathon, or creating art, your energy should be as refined as your ambition.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
