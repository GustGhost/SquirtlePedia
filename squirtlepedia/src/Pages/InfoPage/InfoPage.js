import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBattle, goToHome, goToInfo } from '../../Routes/coordinates';

export const InfoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            goToHome(navigate);
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            goToInfo(navigate);
          }}
        >
          Info
        </button>

        <button
          onClick={() => {
            goToBattle(navigate);
          }}
        >
          Battle
        </button>
      </div>
      <h1>Info</h1>
    </div>
  );
};
