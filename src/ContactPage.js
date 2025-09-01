import React from 'react';
import './App.css';

export default function ContactPage() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </section>
  );
}
