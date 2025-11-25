import React, { useEffect, useRef, useState } from 'react';
import './Section.css';

const Section = ({ id, className = '', children, background = 'default' }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`section section--${background} ${className} ${isVisible ? 'section--visible' : 'section--hidden'}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
