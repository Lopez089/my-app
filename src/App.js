import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('')
  const [lists, setLists] = useState(['lechuga', 'tomate', 'cafe'])

  const handleItem = (e) => {
    e.preventDefault()
    setLists(oldValue => [...oldValue, item])
    setItem('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de la compra</h1>
        <form onSubmit={(e) => handleItem(e)}>
          <input type="text" name='item' value={item} onChange={(e) => setItem(e.target.value)} />
          <button >añadir</button>
        </form>
        <ul>
          {
            lists.map((item) => {
              return (<li key={item}>{item}</li>)
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
