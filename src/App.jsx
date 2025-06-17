import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientArea from './components/ClientArea';
import TreatmentPage from './components/TreatmentPage';
import { treatmentsData } from './data/treatments';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
        <Routes>
          <Route path="/area-cliente" element={<ClientArea />} />
          
          {/* Treatment Routes */}
          {Object.keys(treatmentsData).map(treatmentKey => (
            <Route 
              key={treatmentKey}
              path={`/tratamento/${treatmentKey}`} 
              element={<TreatmentPage treatment={treatmentsData[treatmentKey]} />} 
            />
          ))}
          
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

