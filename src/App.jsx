import React from 'react';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget'; // Importamos el componente CartWidget
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenido!'/>
    </div>
  );
}

function Navbar() {
  const [itemCount, setItemCount] = React.useState(4);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca-de">Tienda</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/contacto">FAQ</a></li>
        <li><a href="/contacto">Acerca de</a></li>
      </ul>
      <CartWidget itemCount={itemCount} /> {}
    </nav>
  );
}

export default App;
