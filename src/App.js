/* eslint-disable comma-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
import React from 'react';
import './App.css';
import FreakTile from './components/FreakTile';
import Freaks from './types/Freaks';

function App() {
  const result = [];

  Freaks.map(user => {
    result.push(
      <FreakTile
        name={ user.name }
        picture={ user.picture }
        key={ user.name }
      />
    );
  });
  return (
    <div className="content">{ result }</div>
  );
}

export default App;
