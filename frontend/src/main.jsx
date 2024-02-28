import React from 'react'
import ReactDOM from 'react-dom/client'
import Wrapper from './providers/Wrapper'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
)
