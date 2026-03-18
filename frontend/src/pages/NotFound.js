import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image404 from '../assets/img/404-error.png'; 

const NotFound = () => {
  // --- PARTIE RÉFÉRENCEMENT (SEO) ---
  useEffect(() => {
    // Change le titre de l'onglet
    document.title = "Page non trouvée - Trouve ton artisan";

    // Ajoute/Modifie la description pour Google
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Désolé, la page que vous recherchez n'existe pas. Revenez sur Trouve ton artisan pour découvrir nos meilleurs professionnels.";
  }, []);

  return (
    <div className="container text-center py-5" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src={image404} 
        alt="Page introuvable" 
        className="img-fluid mb-4" 
        style={{ maxWidth: '400px' }} 
      />
      <h1 className="fw-bold">404 - Page non trouvée</h1>
      <p className="lead">
        La page que vous avez demandée n'existe pas ou a été déplacée.<br/>
        Oups ! L'artisan est peut-être parti en pause déjeuner...
      </p>
      
      {/* Utilisation de ta couleur bleue habituelle pour rester raccord au Figma */}
      <Link to="/" className="btn" style={{ 
        backgroundColor: '#3b69bc', 
        color: 'white', 
        borderRadius: '25px', 
        padding: '10px 30px',
        fontWeight: 'bold',
        marginTop: '20px'
      }}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;