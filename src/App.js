import React from 'react';
import './App.css';
import FreakTile from './components/FreakTile';
import Freak from './types/Freak';

function App() {
  const freak = new Freak();

  return (
    <FreakTile freak={ freak } />
  );
}

export default App;
