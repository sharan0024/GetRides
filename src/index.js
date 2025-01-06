import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetRide from './GetRide';
import GiveRide from './GiveRide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/get-ride" element={<GetRide />} />
        <Route path="/give-ride" element={<GiveRide />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
