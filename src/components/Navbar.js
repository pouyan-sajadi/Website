// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Pouyan Sajadi</Link>
      </div>
      <div className="nav-links">
        <Link to="/">About</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </nav>
  );
}

export default Navbar;