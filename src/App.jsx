import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientArea from './components/ClientArea';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <Routes>
          <Route path="/area-cliente" element={<ClientArea />} />
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Contact />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

