import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [categories, setCategories] = useState([]); // Pour stocker les catégories de la BDD
  const [searchTerm, setSearchTerm] = useState(""); // Pour la barre de recherche

  // Appel à l'API pour récupérer les catégories (à adapter selon ta route API)
  useEffect(() => {
    axios.get('http://localhost:3000/categories') 
      .then(res => setCategories(res.data))
      .catch(err => console.error("Erreur catégories:", err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-3">
      <div className="container">
        {/* LOGO : Lien vers l'accueil (Point 2 du PDF) */}
        <Link className="navbar-brand d-flex flex-column" to="/">
          <span className="fw-bold fs-3 text-primary">Trouve ton artisan !</span>
          <small className="text-info" style={{ fontSize: '10px' }}>Avec la région Auvergne-Rhône-Alpes</small>
        </Link>

        {/* MENU DYNAMIQUE (Point 3 du PDF) */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav bg-primary rounded-pill px-4">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.id}>
                <Link className="nav-link text-white mx-2" to={`/categorie/${cat.name.toLowerCase()}`}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* BARRE DE RECHERCHE (Point 4 du PDF) */}
        <div className="d-flex align-items-center bg-primary rounded-pill px-3 py-1">
          <input 
            type="text" 
            className="form-control bg-transparent border-0 text-white placeholder-white" 
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="text-white">🔍</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;