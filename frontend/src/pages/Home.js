import React, { useState, useEffect } from 'react';
import { getArtisans } from '../services/api';
import { Link } from 'react-router-dom';
import homeImage from '../assets/img/image.jpg'; 

const Home = () => {
  const [artisans, setArtisans] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  // Gestion du titre et meta
  useEffect(() => {
    document.title = "Trouve ton artisan - Les meilleurs artisans de votre région";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Découvrez notre sélection d'artisans qualifiés : bâtiment, services, fabrication et alimentation. Trouvez l'expert qu'il vous faut près de chez vous.";
    }
  }, []);

  // Gestion de la taille de l'écran pour le responsive
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Chargement des artisans du mois
  useEffect(() => {
    const loadArtisans = async () => {
      try {
        const data = await getArtisans();
        if (Array.isArray(data)) {
          const topArtisans = data.filter(a => Number(a.est_artisan_du_mois) === 1).slice(0, 3);
          setArtisans(topArtisans);
        }
      } catch (err) { 
        console.error("Erreur API:", err); 
      }
    };
    loadArtisans();
  }, []);

  const isPC = width >= 1100;

  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    }}>
      
      {/* IMAGE GAUCHE : Affichée UNIQUEMENT sur PC */}
      {isPC && (
        <div style={{ width: '357px', position: 'sticky', top: 0, height: '100vh', flexShrink: 0 }}>
          <img 
            src={homeImage} 
            alt="Artisanat" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </div>
      )}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        
        {/* SECTION 1 : COMMENT TROUVER (BLANC) */}
        <section style={{ 
          backgroundColor: 'white', 
          minHeight: isPC ? '592px' : 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: isPC ? '0 50px' : '60px 20px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ 
            color: '#c22d2d', 
            fontSize: isPC ? '38px' : '26px', 
            marginBottom: isPC ? '40px' : '30px',
            textAlign: 'center'
          }}>
            Comment trouver mon artisan ?
          </h2>
          <div style={{ 
            textAlign: 'left', 
            fontSize: isPC ? '20px' : '18px', 
            lineHeight: isPC ? '2.5' : '2.2', 
            color: '#333',
            maxWidth: '500px'
          }}>
            <p style={{margin: 0}}>1. Choisir la catégorie dans le menu.</p>
            <p style={{margin: 0}}>2. Choisir un artisan.</p>
            <p style={{margin: 0}}>3. Le contacter via le formulaire.</p>
            <p style={{margin: 0}}>4. Une réponse sera apportée sous 48h.</p>
          </div>
        </section>

        {/* SECTION 2 : ARTISANS DU MOIS (VERT) */}
        <section style={{ 
          backgroundColor: '#89c167', 
          padding: isPC ? '80px 40px' : '50px 20px', 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ 
            color: '#333', 
            fontSize: isPC ? '36px' : '28px', 
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Artisans du mois
          </h2>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: isPC ? '30px' : '20px', 
            flexWrap: 'wrap', 
            width: '100%' 
          }}>
            {artisans.map(artisan => (
              <div key={artisan.id} style={{ 
                backgroundColor: 'white', 
                width: isPC ? '300px' : '100%', 
                maxWidth: '350px',
                padding: '25px', 
                borderRadius: '10px', 
                textAlign: 'left',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
              }}>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '8px 0', color: '#333' }}>. Artisan : <strong>{artisan.nom}</strong></p>
                  <p style={{ margin: '8px 0', color: '#333' }}>. Note : {artisan.note} / 5</p>
                  <p style={{ margin: '8px 0', color: '#333' }}>. Spécialité : {
                    typeof artisan.specialite === 'object' ? (artisan.specialite.nom || artisan.specialite.label) : artisan.specialite
                  }</p>
                  <p style={{ margin: '8px 0', color: '#333' }}>. Localisation : {artisan.lieu}</p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Link to={`/artisan/${artisan.id}`} style={{ 
                    display: 'inline-block',
                    backgroundColor: '#1e4382',
                    color: 'white',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    Voir le profil
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;