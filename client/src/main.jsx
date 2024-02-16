import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/main.css'
import "bulma/css/bulma.css"
import axios from 'axios';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
