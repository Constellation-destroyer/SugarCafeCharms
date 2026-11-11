import React from 'react';
import Shop from './Shop';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Shop />
      </main>
      <Footer />
    </div>
  );
}


export default App;
