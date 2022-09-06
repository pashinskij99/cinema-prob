import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css'
import App from './component/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
