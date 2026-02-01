import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextoGlobalProvider from './context/ContextoGlobal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextoGlobalProvider>
    <App />
    </ContextoGlobalProvider>
    </BrowserRouter>
  </StrictMode>,
)
