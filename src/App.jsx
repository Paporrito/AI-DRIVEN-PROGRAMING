import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('Hola Mundo');

  const handleGreet = () => {
    if (name.trim()) {
      setMessage(`Hola, ${name.trim()}`);
    } else {
      setMessage('Hola Mundo');
    }
  };

  const handleClear = () => {
    setName('');
    setMessage('Hola Mundo');
  };

  return (
    <main>
      <h1>{message}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button onClick={handleGreet}>Saludar</button>
      <button onClick={handleClear}>Limpiar</button>
    </main>
  );
}