import React from 'react';
import './App.css';
import Navegacion from './components/NavBar';
import ListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from './CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Provider>
    <Navegacion />
    <Routes>
      <Route path="/" element={"AAA"}/>
      <Route path="/categoria/:idPagina" element={<ListContainer/>}/>
      <Route path="/Detalle/:idDetalle" element={<ItemDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;