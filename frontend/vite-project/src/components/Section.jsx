import './Section.css';

function Section() {
  return (
    <section className="section" id="services">
      <div className="section-container">
        <div className="section-header">
          <div className="header-content">
            <h2>Not Your Average Realtor</h2>
            <p>
              We'll start with a signup for detailed experience, competitive research, platform research, planning design, development, and testing at the end of the process.
            </p>
          </div>
          <div className="main">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" alt="Professional" className="circle-img large" />
          </div>
          <div className="secondary">
            <div className="upper-img">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=250" alt="Team" className="circle-img medium" /></div>
            <div className="bottom-img">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250" alt="Agent" className="circle-img small" /></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Section;