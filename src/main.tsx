import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WindowProvider from './Components/Contexts/windowContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </StrictMode>,
)