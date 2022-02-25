import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AuthContexProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
