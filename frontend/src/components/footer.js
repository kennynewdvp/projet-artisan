import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isPC = width >= 1100;

  const boxStyle = {
    backgroundColor: '#3b69bc',
    padding: '20px',
    borderRadius: '15px',
    fontSize: '14px',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
    width: isPC ? '280px' : '90%', 
    maxWidth: isPC ? 'none' : '450px',
    margin: isPC ? '0' : '10px auto', 
    boxSizing: 'border-box'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '8px',
    textAlign: isPC ? 'left' : 'center',
    fontWeight: '500'
  };

  return (
    <footer style={{
      backgroundColor: '#1e4382',
      color: 'white',
      padding: isPC ? '40px 5%' : '40px 20px',
      // ON SUPPRIME LE MARGIN TOP ICI POUR COLLER AU VERT
      marginTop: '0', 
      width: '100%',
      boxSizing: 'border-box',
      display: 'block' // Force le rendu en bloc
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isPC ? 'row' : 'column', 
        justifyContent: isPC ? 'space-around' : 'center', 
        alignItems: 'center', 
        gap: '30px',
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* BLOC GAUCHE */}
        <div style={boxStyle}>
          <Link to="/cookies" style={linkStyle}>Cookies</Link>
          <Link to="/accessibilite" style={linkStyle}>Accessibilité</Link>
          <Link to="/donnees-personnelles" style={linkStyle}>Données personnelles</Link>
          <Link to="/mentions-legales" style={linkStyle}>Mentions légales</Link>
        </div>

        {/* BLOC CENTRE */}
        <div style={{ ...boxStyle, textAlign: isPC ? 'left' : 'center' }}>
          <div>101 cours Charlemagne</div>
          <div>cs 20033</div>
          <div>69269 Lyon Cedex 02</div>
          <div>France</div>
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>+33(0)4 26 73 40 00</div>
        </div>

        {/* BLOC DROITE */}
        <div style={{ 
          maxWidth: isPC ? '250px' : '100%',
          textAlign: 'center', 
          fontSize: '13px',
          opacity: '0.9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          lineHeight: '1.5'
        }}>
          © Copyright 2026 - <br/> 
          <span style={{ fontWeight: 'bold' }}>Trouve ton artisan !</span> <br/> 
          Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;