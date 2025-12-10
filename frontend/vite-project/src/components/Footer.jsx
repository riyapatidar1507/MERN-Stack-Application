import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>All Rights Reserved @2025</p>
        </div>
        
        <div className="footer-center">
          <div className="footer-logo">
            <span className="logo-icon">
                <svg width="25" height="25" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5L5 15V30H15V22H25V30H35V15L20 5Z" fill="#2563eb" stroke="#2563eb" strokeWidth="2"/>
                </svg>
            </span>
            <span className="logo-text">Real<span className="logo-light">trust</span></span>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#1a1a2e"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#1a1a2e" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;