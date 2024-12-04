import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PokemonBigCard from './Pokemon-big-card.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
