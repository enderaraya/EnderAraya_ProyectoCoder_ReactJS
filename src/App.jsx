
import { createContext } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export const Context = createContext(1)

function App() {
  return (

    <Context.Provider value={10}>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido!' />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Categoría de: '} />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App
