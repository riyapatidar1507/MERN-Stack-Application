import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setMessage('Successfully subscribed!');
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
     
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="cta-btn">LEARN MORE</button>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="newsletter-subscription">
            <h3>Subscribe Us</h3>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {message && <p className="newsletter-message">{message}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;