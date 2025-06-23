import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import Navigation from './component/Navigation.tsx'
import Footer from './component/Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
    <App />
    <Footer />
  </StrictMode>
)
