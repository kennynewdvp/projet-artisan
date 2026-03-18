import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; 
import Footer from './components/footer'; 
import PageConstruction from './pages/PageConstruction';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import NotFound from './pages/NotFound'; // On importe ta page 404

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* --- ROUTES PRINCIPALES --- */}
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ArtisanList />} />
          <Route path="/artisans" element={<ArtisanList />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          {/* --- PAGES DE RÉGLEMENTATION (En construction) --- */}
          <Route path="/cookies" element={<PageConstruction />} />
          <Route path="/accessibilite" element={<PageConstruction />} />
          <Route path="/donnees-personnelles" element={<PageConstruction />} />
          <Route path="/mentions-legales" element={<PageConstruction />} />

          {/* --- ROUTE 404 --- */}
          {/* Le path="*" attrape toutes les URLs non définies ci-dessus */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;