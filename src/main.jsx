import React from 'react'
import App from './App.jsx'
import "./index.css"
import {AppProvider } from "./context";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>

    <App />
    </AppProvider>
  </StrictMode>,
)

