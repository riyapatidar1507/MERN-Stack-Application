import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose" id="services">
      <div className="why-choose-container">
        
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#FFF5F0" stroke="#FF7843" strokeWidth="2"/>
                <path d="M30 18L20 26V40H26V32H34V40H40V26L30 18Z" fill="#FF7843" stroke="#FF7843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Potential ROI</h3>
            <p>
              We strive to provide a tailored approach to help you achieve your investment goals. Through careful analysis of your current property.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#FFF5F0" stroke="#FF7843" strokeWidth="2"/>
                <path d="M25 20L30 15L35 20M30 15V30M20 35L22 37L25 34M35 35L33 37L30 34M40 35L38 37L35 34" stroke="#FF7843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 40H38C39.1 40 40 39.1 40 38V42C40 43.1 39.1 44 38 44H22C20.9 44 20 43.1 20 42V38C20 39.1 20.9 40 22 40Z" fill="#FF7843"/>
              </svg>
            </div>
            <h3>Design</h3>
            <p>
              Our strategic team is well-experienced and brings valuable professional skills. From innovative design concepts to strategic planning.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="#FFF5F0" stroke="#FF7843" strokeWidth="2"/>
                <circle cx="30" cy="30" r="15" stroke="#FF7843" strokeWidth="2"/>
                <path d="M30 22V30L35 35" stroke="#FF7843" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 30H18M42 30H38M30 18V22M30 38V42" stroke="#FF7843" strokeWidth="1.5" strokeLinecap="round"/>
                <text x="35" y="25" fill="#FF7843" fontSize="14" fontWeight="bold">$</text>
              </svg>
            </div>
            <h3>Marketing</h3>
            <p>
              Engaging with families is understanding your needs. Our comprehensive marketing plans are developed to maximize your property's exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;