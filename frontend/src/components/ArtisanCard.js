import React from 'react';
import { Link } from 'react-router-dom';

const ArtisanCard = ({ artisan }) => {
  const displaySpecialite = typeof artisan.specialite === 'object' ? artisan.specialite?.nom : artisan.specialite;

  return (
    <div style={{ 
      backgroundColor: 'white', 
      // MODIFICATION ICI : on met width 100% et maxWidth 320px
      // Comme ça, à 370px, elle ne dépasse pas !
      width: '100%',
      maxWidth: '320px', 
      height: '350px',
      padding: '20px', 
      borderRadius: '15px', 
      border: '2px solid #89c167', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      gap: '12px', 
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      boxSizing: 'border-box',
      // On ajoute une marge auto pour qu'elle reste centrée
      margin: '10px auto' 
    }}>
      {/* Partie Texte */}
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#333' }}>{artisan.nom}</h3>
        
        <p style={{ margin: '0', color: '#f1c40f', fontSize: '18px' }}>
          {artisan.note} ★
        </p>
        
        <p style={{ margin: '8px 0 0 0', fontSize: '15px', color: '#666' }}>
          <strong>Spécialité :</strong> {displaySpecialite || "Non spécifiée"}
        </p>
        
        <p style={{ margin: '5px 0 0 0', fontSize: '15px', color: '#666' }}>
          <strong>Lieu :</strong> {artisan.lieu}
        </p>
      </div>
      
      {/* Partie Bouton */}
      <div style={{ marginTop: '10px' }}>
        <Link to={`/artisan/${artisan.id}`} style={{ 
          backgroundColor: '#3b69bc', 
          color: 'white', 
          padding: '12px 40px', 
          borderRadius: '25px', 
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block',
          fontSize: '15px'
        }}>
          Détails
        </Link>
      </div>
    </div>
  );
};

export default ArtisanCard;