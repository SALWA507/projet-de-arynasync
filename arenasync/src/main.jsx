import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { tournamentData } from './data/tournamentDB.js'
console.log(tournamentData);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
