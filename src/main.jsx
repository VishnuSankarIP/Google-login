import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <GoogleOAuthProvider clientId="130581885479-39te09hiop4q1tq3rjvjtldqmmhba028.apps.googleusercontent.com"><App /></GoogleOAuthProvider></BrowserRouter> 
  </React.StrictMode>,
)
