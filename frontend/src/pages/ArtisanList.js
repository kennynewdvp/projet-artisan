import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtisans } from '../services/api';
import ArtisanCard from '../components/ArtisanCard';

const ArtisanList = () => {
  // 1. Récupération des paramètres
  const { categoryName } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect pour le RÉFÉRENCEMENT (SEO)
  useEffect(() => {
    const categoryTitle = categoryName ? `${categoryName}` : "Tous nos artisans";
    document.title = `${categoryTitle} - Trouve ton artisan`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = `Consultez la liste des meilleurs artisans en ${categoryTitle}. Visualisez leurs notes et contactez-les directement.`;
    }
  }, [categoryName]);

  // 3. useEffect pour le CHARGEMENT des données
  useEffect(() => {
    const loadArtisans = async () => {
      setLoading(true);
      try {
        const data = await getArtisans();
        
        if (categoryName) {
          const target = categoryName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          
          const filtered = data.filter(a => {
            const catNom = a.specialite?.categorie?.nom || "";
            const catNomClean = catNom.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return catNomClean.includes(target);
          });
          setArtisans(filtered);
        } else {
          setArtisans(data);
        }
      } catch (err) {
        console.error("Erreur lors du chargement des artisans:", err);
      } finally {
        setLoading(false);
      }
    };
    loadArtisans();
  }, [categoryName]);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Chargement des artisans...</p>;

  return (
    <div style={{ 
      padding: '40px 5%', 
      minHeight: '80vh', 
      backgroundColor: '#f9f9f9',
      width: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      
      {/* TITRE : Aligné à gauche sur PC, centré sur mobile */}
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: window.innerWidth < 768 ? 'center' : 'left', 
          marginBottom: '40px', 
          fontSize: '28px', 
          color: '#333',
          fontWeight: 'bold',
          paddingLeft: window.innerWidth < 768 ? '0' : '10px'
        }}>
          Catégorie : {categoryName || "Tous les artisans"}
        </h2>
      </div>

      {/* GRILLE : auto-fit pour équilibrer le nombre de cartes */}
      <div style={{ 
        display: 'grid', 
        // auto-fit permet de mieux répartir l'espace quand il y a peu d'artisans
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        justifyContent: 'center', 
        maxWidth: '1300px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {artisans.length > 0 ? (
          artisans.map(artisan => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Aucun artisan trouvé dans cette catégorie.
          </p>
        )}
      </div>
    </div>
  );
};

export default ArtisanList;