import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App'
import UseContextPage from './routes/use-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="use-context" element={<UseContextPage/>} />
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
