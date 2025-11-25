import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Science from './components/Science';
import UseCases from './components/UseCases';
import Mission from './components/Mission';
import FAQ from './components/FAQ';
import Partner from './components/Partner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <Benefits />
        <HowItWorks />
        <Science />
        <UseCases />
        <Mission />
        <FAQ />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
