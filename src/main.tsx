import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (
  typeof document !== 'undefined' &&
  window?.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  document.documentElement.classList.add('reduce-motion')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
