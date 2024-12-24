/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */
/** Node Modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/** Components */
import App from './App.jsx'

/** Css Links */
import './index.css'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode basename="/Portfolio">
    <App />
  </StrictMode>,
)
