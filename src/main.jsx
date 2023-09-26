import "bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/style.css';
import './assets/styles/ItemListContainer.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
