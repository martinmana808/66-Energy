import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from './Section';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-item__question">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div className="faq-item__answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How is 66 ENERGY different from normal energy drinks?',
      answer: '66 ENERGY is a zero-sugar, effervescent tablet, not a canned drink. It provides a cleaner, smoother energy boost without the crash, using a calibrated formula of caffeine and L-Theanine.'
    },
    {
      question: 'Is it sugar-free?',
      answer: 'Yes, 66 ENERGY is completely sugar-free and low in calories.'
    },
    {
      question: 'How many tablets can I take per day?',
      answer: 'We recommend starting with one tablet per day. Do not exceed 3 tablets in a 24-hour period. Always listen to your body.'
    },
    {
      question: 'Can I use it before the gym?',
      answer: 'Absolutely. It makes for an excellent pre-workout, providing focus and physical energy without the heavy feeling of a large drink.'
    },
    {
      question: 'Is it suitable for work and study?',
      answer: 'Yes, the addition of L-Theanine helps promote a state of calm focus, making it ideal for deep work and study sessions.'
    },
    {
      question: 'Can I travel with it?',
      answer: 'Yes! The compact tube is perfect for travel. No liquids means no TSA issues.'
    }
  ];

  return (
    <Section id="faq" className="faq" background="default">
      <h2 className="section-title text-center">Frequently Asked Questions</h2>
      <div className="faq__list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
