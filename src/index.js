import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import GameState from './context/GameContext';
import ModelState from './context/ModelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModelState>
      <GameState>
        {" "}
        <App />
      </GameState>
    </ModelState>
  </React.StrictMode>
);

