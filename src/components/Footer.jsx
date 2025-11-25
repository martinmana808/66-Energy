import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <a href="#" className="footer__logo">66 ENERGY</a>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} 66 ENERGY. All rights reserved.
          </p>
        </div>
        
        <nav className="footer__nav">
          <ul className="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#partner">Start Your 66 Business</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer__social">
          {/* Social placeholders */}
          <a href="#" className="social-link">IG</a>
          <a href="#" className="social-link">TW</a>
          <a href="#" className="social-link">LI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
