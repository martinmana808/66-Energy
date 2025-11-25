import React, { useState } from 'react';
import Button from './Button';
import Section from './Section';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'individual',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We will get back to you soon.');
  };

  return (
    <Section id="contact" className="contact" background="default">
      <div className="contact__content">
        <h2 className="section-title text-center">Stay in the Loop</h2>
        <p className="section-description text-center">
          Questions, feedback, or partnership inquiries? We'd love to hear from you.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">I am...</label>
            <div className="select-wrapper">
              <select 
                id="type" 
                name="type" 
                value={formData.type} 
                onChange={handleChange}
              >
                <option value="individual">An individual customer</option>
                <option value="partner">A potential partner / distributor</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4" 
              placeholder="How can we help?"
            ></textarea>
          </div>

          <Button variant="primary" className="btn--full-width">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
