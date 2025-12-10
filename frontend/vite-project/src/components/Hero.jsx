import { useState } from 'react';
import './Hero.css';

function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Thank you! We will contact you soon.');
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage(data.message || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Consultation,<br />
            Design,<br />
            & Marketing
          </h1>
        </div>
        <div className="hero-form">
          <div className="form-card">
            <h2>Get a Free Consultation</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name"  value={formData.fullName}  onChange={handleChange}  required />
              <input type="email" name="email" placeholder="Enter Email Address"  value={formData.email}  onChange={handleChange}  required />
              <input type="tel" name="mobile" placeholder="Mobile Number"  value={formData.mobile}  onChange={handleChange}  pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required />
              <input type="text" name="city" placeholder="Area, City"  value={formData.city}  onChange={handleChange}  required />

              <button type="submit"   className="submit-btn"  disabled={isSubmitting} >
                {isSubmitting ? 'Submitting...' : 'Get Quick Quote'}
              </button>
            </form>
            {message && (<p className={`form-message ${message.includes('Thank you') ? 'success' : 'error'}`}> {message} </p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;