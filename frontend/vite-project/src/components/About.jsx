import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" alt="" className="about-img-1" />
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500" alt="" className="about-img-2" />
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400" alt="" className="about-img-3" />
        </div>

        
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Fifteen years of experience in real estate, excellent customer service
            and a commitment to work hard, listen and follow through. We provide
            quality service to build relationships with clients and, more
            importantly, maintain these relationships by communicating effectively.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>

      </div>
    </section>
  );
}

export default About;
