import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './Context/isLoginUser.jsx'
import { AppContextProvider } from './Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthProvider>
  </StrictMode>,
)
