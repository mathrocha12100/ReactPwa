import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="app-page__container">
      <h1>Teste PWA</h1>
      <p>Apenas um contador inutil :)</p>
      <div className="app-page__count-wrapper">
        <div className="app-page__count-container">
          { count }
        </div>

        <button onClick={incrementCount} className="app-page__count-button">Somar um</button>
      </div>
    </div>
  );
}

export default App;