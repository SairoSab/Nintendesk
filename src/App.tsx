import React from 'react';
import logo from './logo.svg';
import './App.css';

import Gamelist from './components/Gamelist/Gamelist';

function App() {
  return (
    <div className="App">
      <Gamelist games={["Dummy"]} />
    </div>
  );
}

export default App;
