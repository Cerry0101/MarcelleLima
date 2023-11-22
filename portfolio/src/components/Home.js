// Home.js
import React from 'react';

const Home = ({ contextValue, setContextValue }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Conteúdo do componente Home</p>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  );
};

export default Home;
