import React from 'react';
import Section from './Section';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Drop',
      description: 'Place one tablet into 250ml of water.'
    },
    {
      number: '02',
      title: 'Dissolve',
      description: 'Watch it transform into a flavoured energy drink.'
    },
    {
      number: '03',
      title: 'Perform',
      description: 'Drink, focus, and execute your goals.'
    }
  ];

  return (
    <Section id="how-it-works" className="how-it-works" background="light">
      <div className="how-it-works__content">
        <h2 className="section-title text-dark">The Ritual</h2>
        <p className="section-description text-dark-muted">
          Designed for performance, not just consumption.
        </p>
        
        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step__number">{step.number}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
