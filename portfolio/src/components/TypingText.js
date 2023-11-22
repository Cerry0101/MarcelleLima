// TypingText.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const TypingText = () => {
  const typingStyle = {
    fontSize: '2em', // Tamanho da fonte
    color: 'white',  // Cor das letras
    fontFamily: 'Roboto',  // Fonte Roboto
  };

  return (
    <ReactTypingEffect
      text={["Oi, meu nome é Marcelle Lima", "Seja Bem-Vindo!"]}
      typingDelay={1000} // Atraso entre as mensagens
      eraseDelay={1000} // Atraso antes de apagar a mensagem
      displayTextRenderer={(text, i) => {
        return (
          <div style={typingStyle}>
            {text}
          </div>
        );
      }}
    />
  );
};

export default TypingText;
