import React from 'react';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget'; // Importamos el componente CartWidget
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenido!'/>
    </div>
  );
}

export default App;
