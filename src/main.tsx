import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './css/index.css'
import Navigation from './component/Navigation.tsx'
import Footer from './component/Footer.tsx'
import Generate from './pages/generate.tsx'
import Fonctionnalites from './pages/Fonctionnalites.tsx'
import Tarifs from './pages/Tarifs.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/generer" element={<Generate />} />
        <Route path="/fonctionnalites" element={<Fonctionnalites />} />
        <Route path="/tarifs" element={<Tarifs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
