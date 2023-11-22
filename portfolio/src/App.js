// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import TypingText from './components/TypingText';

function App() {
  const [contextValue, setContextValue] = useState(/* Seu valor de contexto aqui */);

  return (
    <Router>
      <div>
        <Navbar /> 
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '1400px', height: '70vh' }}>
        <TypingText />
      </div>
    </Router>
  );
}

export default App;
