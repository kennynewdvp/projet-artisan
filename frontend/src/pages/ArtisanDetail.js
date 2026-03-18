import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtisanById } from '../services/api';
import defaultLogo from '../assets/img/favicon.png'; 

const ArtisanDetail = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getArtisanById(id);
        setArtisan(data);
        if (data) {
          document.title = `${data.nom} - Trouve ton artisan`;
        }
      } catch (err) {
        console.error("Erreur de récupération :", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nomClient = formData.get('nom');
    const emailClient = formData.get('email');
    const sujet = formData.get('objet');
    const message = formData.get('message');

    if (artisan && artisan.email) {
      const corpsMail = `Message de : ${nomClient} (${emailClient})\n\n${message}`;
      const mailtoLink = `mailto:${artisan.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corpsMail)}`;
      window.location.href = mailtoLink;
    }
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Chargement en cours...</p>;
  if (!artisan) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Artisan introuvable.</p>;

  // AJUSTEMENT DES DIMENSIONS POUR PC
  const isLargeScreen = windowWidth > 1024;
  const adaptivePadding = windowWidth < 350 ? '20px' : '45px';

  return (
    <div style={{ 
      padding: isLargeScreen ? '80px 5%' : '40px 5%', 
      backgroundColor: '#f9f9f9', 
      minHeight: '90vh',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '50px', // Plus d'espace entre les deux blocs sur PC
        flexWrap: 'wrap', 
        justifyContent: 'center',
        maxWidth: '1450px', // On autorise une largeur beaucoup plus grande
        width: '100%'
      }}>
        
        {/* CARTE INFOS ARTISAN */}
        <div style={{ 
          flex: isLargeScreen ? '1 1 550px' : '1 1 280px', // Occupe 550px minimum sur PC
          maxWidth: '700px', // Limite haute plus généreuse
          backgroundColor: 'white', 
          padding: adaptivePadding, 
          borderRadius: '20px', 
          border: '2px solid #89c167', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          boxSizing: 'border-box'
        }}>
          <img src={defaultLogo} alt="Logo" style={{ width: '80px', marginBottom: '20px' }} />
          <h2 style={{ color: '#333', fontSize: isLargeScreen ? '36px' : '26px', marginBottom: '15px' }}>
            {artisan.nom}
          </h2>
          <p style={{ color: '#f1c40f', fontSize: '24px', margin: '15px 0' }}>
            {artisan.note} ★★★★
          </p>
          <div style={{ textAlign: 'left', marginTop: '30px', fontSize: '18px', lineHeight: '1.8' }}>
            <p><strong>Spécialité :</strong> {artisan.specialite?.nom || artisan.specialite || "Non renseignée"}</p>
            <p><strong>Localisation :</strong> {artisan.lieu}</p>
            <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '30px 0' }} />
            <p><strong>À propos :</strong><br/>{artisan.a_propos || "Pas de description disponible."}</p>
          </div>
        </div>

        {/* FORMULAIRE DE CONTACT */}
        <div style={{ 
          flex: isLargeScreen ? '1 1 550px' : '1 1 280px', 
          maxWidth: '700px', 
          backgroundColor: 'white', 
          padding: adaptivePadding, 
          borderRadius: '20px', 
          border: '2px solid #89c167', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          boxSizing: 'border-box'
        }}>
          <h3 style={{ textAlign: 'center', color: '#1e4382', marginBottom: '35px', fontSize: '26px' }}>
            Contactez cet artisan
          </h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input name="nom" type="text" placeholder="Votre nom" required 
              style={{ padding: '16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} />
            
            <input name="email" type="email" placeholder="Votre adresse e-mail" required 
              style={{ padding: '16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} />
            
            <input name="objet" type="text" placeholder="Sujet" required 
              style={{ padding: '16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} />
            
            <textarea name="message" rows="7" placeholder="Votre projet..." required 
              style={{ padding: '16px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', resize: 'vertical' }}></textarea>
            
            <button type="submit" style={{ 
              backgroundColor: '#3b69bc', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '40px', 
              border: 'none', 
              fontWeight: 'bold', 
              fontSize: '18px',
              cursor: 'pointer',
              marginTop: '10px'
            }}>
              Envoyer l'e-mail
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ArtisanDetail;