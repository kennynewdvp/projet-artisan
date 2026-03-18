import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageConstruction = () => {
  // --- PARTIE RÉFÉRENCEMENT (SEO) ---
  useEffect(() => {
    document.title = "Page en construction - Trouve ton artisan";
    
    // Mise à jour de la meta description pour Google
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Cette page est actuellement en cours de rédaction. Revenez très bientôt pour consulter nos informations.";
    }
  }, []);

  return (
    <div style={{ 
      minHeight: '75vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      {/* Icône visuelle */}
      <div style={{ fontSize: '80px', marginBottom: '10px' }}>🚧</div>
      
      {/* Titre avec ton bleu habituel */}
      <h2 style={{ fontSize: '36px', color: '#1e4382', fontWeight: 'bold' }}>
        Page en construction
      </h2>
      
      <p style={{ fontSize: '18px', color: '#666', maxWidth: '500px', lineHeight: '1.6', marginTop: '10px' }}>
        Nous préparons actuellement le contenu de cette section.<br/>
        Merci de votre patience !
      </p>

      {/* Bouton de retour avec ton vert habituel pour la cohérence */}
      <Link to="/" style={{ 
        marginTop: '30px',
        backgroundColor: '#89c167',
        color: 'white',
        padding: '12px 35px',
        borderRadius: '25px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: '0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#76a858'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#89c167'}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default PageConstruction;