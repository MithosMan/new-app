import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Count from './Count';

const ItemDetail = ({data}) => {

  const [cart, setCart] = useState(false);

  const carrito = (valor) => {
    setCart(true)
  }

  return (
    <div>
      <img src={data.imagen}></img>
      <h2>{data.titulo}</h2>
      <p>Precio: ${data.obolos}</p>
      <p> (Hay {data.stock} disponibles)</p>
      {
        cart
        ? <Link to="/Cart">Ir al Carrito</Link>
        : <Count start={1} stock={data.stock} carrito={carrito}/>
      }
      
    </div>
    );
  }

  export default ItemDetail;
  