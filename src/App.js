import React from 'react';
import './App.css';
import FreakTile from './components/FreakTile';
import { freaks } from './mock-data/freaks.json';

function App() {
  const result = freaks.map((user) => (
    <FreakTile
      id={ user.id }
      name={ user.name }
      picture={ user.picture }
      key={ user.name }
    />
  ));

  return (
    <div className="content">{ result }</div>
  );
}

export default App;
