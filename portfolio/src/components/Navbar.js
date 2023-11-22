// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../components/Home';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import '../css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/sobre">Sobre Mim</Link></li>
        <li className="nav-item"><Link to="/projetos">Projetos</Link></li>
        <li className="nav-item"><Link to="/contatos">Contatos</Link></li>
        <li className="nav-item social-icons">
          <a className="social-link" href="https://www.linkedin.com/in/marcelle-lima-a61384190/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="social-link" href="https://github.com/Cerry0101" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
