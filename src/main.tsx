import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import Navigation from './component/Navigation.tsx'
import Wave from './component/Wave.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
    <App />
    <Wave />
  </StrictMode>
)
