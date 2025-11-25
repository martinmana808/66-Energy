import React from 'react';
import { Zap, Brain, Pocket, Sliders } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      title: 'Clean Formula',
      description: 'Zero sugar, no heavy additives. Just pure, calibrated energy without the junk found in traditional energy drinks.',
      icon: Zap
    },
    {
      title: 'Smooth Focus',
      description: 'Enhanced mental clarity with reduced jitters and crash. Designed for sustained cognitive performance.',
      icon: Brain
    },
    {
      title: 'Portable Power',
      description: 'Pocket-sized tube goes anywhere. Gym bag, laptop case, or pocket. No bulky cans to carry.',
      icon: Pocket
    },
    {
      title: 'Flexible Dosing',
      description: 'Control your intake. Break a tablet in half for a light boost, or take a full one for deep work.',
      icon: Sliders
    }
  ];

  return (
    <Section id="benefits" className="benefits" background="default">
      <h2 className="section-title text-center">Why 66 ENERGY?</h2>
      <div className="benefits__grid">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            title={benefit.title} 
            icon={benefit.icon}
          >
            {benefit.description}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
