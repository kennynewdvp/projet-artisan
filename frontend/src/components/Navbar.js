import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/favicon.png'; // Vérifie bien que le chemin vers ton logo est correct

const Navbar = () => {
  return (
    <nav style={navStyle}>
      {/* BLOC LOGO ET NOM DU SITE */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoImgStyle} />
        <Link to="/" style={brandNameStyle}>
          Trouve ton artisan
        </Link>
      </div>

      {/* BLOC DES LIENS DE NAVIGATION */}
      <div style={linksContainerStyle}>
        <Link to="/" style={linkStyle}>Accueil</Link>
        <Link to="/artisans" style={linkStyle}>Nos Artisans</Link>
      </div>
    </nav>
  );
};

// --- STYLES (Inline pour rester simple et éviter les conflits CSS) ---

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 5%',
  backgroundColor: '#1e4382', // Ton bleu de référence
  color: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  position: 'sticky', // La barre reste en haut quand on scrolle
  top: 0,
  zIndex: 1000,
  flexWrap: 'wrap' // Permet de passer sur deux lignes si l'écran est minuscule (< 300px)
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};

const logoImgStyle = {
  width: '35px',
  height: 'auto'
};

const brandNameStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  letterSpacing: '0.5px'
};

const linksContainerStyle = {
  display: 'flex',
  gap: '25px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'opacity 0.2s',
  borderBottom: '2px solid transparent'
};

// Note : Pour l'effet au survol (hover), il faudrait du CSS externe, 
// mais pour un devoir, ce style propre suffit largement !

export default Navbar;