import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';
import logo from '../assets/img/Logo.png'; 
import loupe from '../assets/img/loupe.png'; 

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth >= 1100) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    const loadData = async () => {
      const catData = await getCategories();
      if (Array.isArray(catData)) setCategories(catData);
    };
    loadData();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isPC = width >= 1100;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/artisans?search=${searchTerm}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={{ 
      backgroundColor: '#1e4382', 
      width: '100%', // On repasse en 100% pour éviter le bug du scroll PC
      minHeight: isPC ? '200px' : '80px',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden' // Sécurité anti-débordement
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%',
        padding: isPC ? '0 5%' : '0 15px',
        boxSizing: 'border-box'
      }}>
        <Link to="/" style={{ display: 'block', maxWidth: isPC ? '350px' : '120px' }}>
          <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Link>

        {isPC && (
          <nav style={{ backgroundColor: '#3b69bc', borderRadius: '50px', padding: '10px 30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
            {categories.map((c) => (
              <Link key={c.id} style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }} to={`/category/${c.nom?.toLowerCase()}`}>{c.nom}</Link>
            ))}
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '20px', padding: '5px 10px' }}>
              <input type="text" placeholder="Recherche" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ border: 'none', outline: 'none', width: '100px' }} />
              <button type="submit" style={{ background: 'none', border: 'none' }}><img src={loupe} alt="L" style={{ width: '16px' }} /></button>
            </form>
          </nav>
        )}

        {!isPC && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', padding: '10px' }}>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black', marginBottom: '5px' }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black', marginBottom: '5px' }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: 'black' }}></div>
          </button>
        )}
      </div>

      {!isPC && isMenuOpen && (
        <nav style={{ backgroundColor: '#3b69bc', margin: '10px', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          {categories.map((c) => (
            <Link key={c.id} style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }} to={`/category/${c.nom?.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{c.nom}</Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;