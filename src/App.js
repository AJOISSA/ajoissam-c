import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import ProductList from './components/ProductList';
import EventList from './components/EventList';
import BlogSocial from './components/BlogSocial';
import logo from './logo.png';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 flex items-center justify-between bg-gray-900">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2"/>
          <h1 className="text-2xl">AJOISSA Motorsport & Customs</h1>
        </div>
        <LanguageSelector />
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-xl mb-2">Uusimmat tuotteet</h2>
          <ProductList />
        </section>
        <section className="mb-8">
          <h2 className="text-xl mb-2">Tapahtumat</h2>
          <EventList />
        </section>
        <section className="mb-8">
          <h2 className="text-xl mb-2">Blogi & Some</h2>
          <BlogSocial />
        </section>
      </main>
      <footer className="p-4 text-center bg-gray-900">
        <p>Yhteystiedot: <a href="mailto:ajoissaoy@gmail.com" className="text-red-600">ajoissaoy@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
