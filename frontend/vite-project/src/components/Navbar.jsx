import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L5 15V30H15V22H25V30H35V15L20 5Z" fill="#2563eb" stroke="#2563eb" strokeWidth="2"/>
          </svg>
          <span>Real Trust</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#projects">ABOUT PROJECTS</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
        </ul>

        <a href="#" className="navbar-contact-btn">CONTACT</a>
      </div>
    </nav>
  );
}

export default Navbar;