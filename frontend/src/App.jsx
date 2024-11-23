import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavItems/>
      {/* Afficher le contenu de l'application avec une hauteur minimale de 100vh */}
      <div className="min-vh-100">
        <Outlet/>
      </div>
      {/* le footer de l'application */}
      <Footer/>
    </>
  )
}

export default App
