import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalTransactionContextProvider } from './Contexts/InputContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalTransactionContextProvider>
      <App />
    </GlobalTransactionContextProvider>
  </React.StrictMode>,
)
