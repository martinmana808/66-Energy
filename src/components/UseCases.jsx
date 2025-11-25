import React from 'react';
import Section from './Section';
import './UseCases.css';

const UseCases = () => {
  const cases = [
    {
      title: 'Deep Work',
      description: 'Lock in for hours of uninterrupted focus on complex tasks.'
    },
    {
      title: 'Training',
      description: 'Pre-workout energy boost for lifting, running, or sport.'
    },
    {
      title: 'Study',
      description: 'Retain more information and stay alert during late sessions.'
    },
    {
      title: 'Gaming',
      description: 'Reaction time and strategic clarity for competitive play.'
    },
    {
      title: 'Travel',
      description: 'Combat jet lag and stay sharp on long journeys.'
    }
  ];

  return (
    <Section id="use-cases" className="use-cases" background="default">
      <h2 className="section-title text-center">Engineered for Every State</h2>
      
      <div className="use-cases__scroll-container">
        <div className="use-cases__track">
          {cases.map((item, index) => (
            <div key={index} className="use-case-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default UseCases;
