// Punto de entrada de la aplicación React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// En la configuración de Vite, hemos seleccionado React+SWC, 
// Utilizando SWC → Transpilador escrito en Rust (muchísimo más rápido). El cual es como Babel, pero más rápido, y es compatible con JSX, TypeScript, etc.



