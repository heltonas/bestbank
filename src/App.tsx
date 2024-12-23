import React from 'react';
import Navbar from './components/navigation/Navbar';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />
      <Header />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;