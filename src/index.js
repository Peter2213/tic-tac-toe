import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModelState } from './modelContext/ModelContext';
import { GameState } from './modelContext/GameContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModelState>
      <GameState>
    <App />
      </GameState>
    </ModelState>
  </React.StrictMode>
);
