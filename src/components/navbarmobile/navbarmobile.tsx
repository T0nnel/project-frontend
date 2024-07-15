import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarmobile.css'; // Link to your CSS file

export const Navbarmobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`nav-links101 ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to={'/defhome'}>Home</Link></li>
          <li><Link className='sign' to={'/register'}>Sign Up</Link></li>
          <li><Link className='remove' to={'/login'}>Log In</Link></li>
          <li><Link className='remove' to={'/contact'}>Contact</Link></li>
          <li><Link className='sell' to={'/sellpage'}>Sell</Link></li>
        </ul>
      </div>
    </nav>
  );
};





