import React, { useContext } from 'react'
import ItemCart from './ItemCart';
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, totalPrice, totalProducts} = useContext(CartContext)


  if(cart.length === 0){
    return(
      <>
      <p>No hay elementos en el Carrito</p>
      <Link to="/">Hacer Compras</Link>
      </>
    )
  }

  return (
    <div>
    <div>{cart.map(item=><ItemCart key={item.id} producto={item}/>)}</div>
    <div>Items: {totalProducts}</div>
    <div>Total: ${totalPrice}</div>
    </div>
  )
}

export default Cart