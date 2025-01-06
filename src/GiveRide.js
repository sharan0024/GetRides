import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function GiveRide() {
  const navigate = useNavigate();

  return (
    <div className="new-page">
      <div className="back-arrow" onClick={() => navigate('/')}>⬅</div>
      <h1>Give Ride</h1>
      <p>Offer your ride and earn!</p>
    </div>
  );
}

export default GiveRide;
