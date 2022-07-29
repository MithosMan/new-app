import React from 'react';
import './App.css';
import Navegacion from './components/NavBar';
import ListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import CartWidget from "./components/Cart";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './CartContext';


export const CartContext = React.createContext("")

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <CartProvider> */}
    <Navegacion />
    <Routes>
      <Route path="/" element={"AAA"}/>
      <Route path="/categoria/:idPagina" element={<ListContainer/>}/>
      <Route path="/Detalle/:idDetalle" element={<ItemDetailContainer/>}/>
      {/* <Route path="/Cart" element={<CartWidget/>}/> */}
    </Routes>
    {/* </CartProvider> */}
    </BrowserRouter>
    </div>
  );
}

export default App;