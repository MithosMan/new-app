import React, { useContext } from 'react'
import ItemCart from './ItemCart';
import { CartContext } from '../CartContext'

const Cart = () => {

  const {cart, deleteAll, deleteOne, suma} = useContext(CartContext)


  if(cart.length === 0){
    return(
      <p>No hay elementos en el Carrito</p>
    )
  }

  return (
    <div>AAA
    <div>
      {cart.map(item=><ItemCart key={item.id} producto={item}/>)}
    </div>
    {/* <div>Total: {totalPrice}</div> */}
    </div>
  )
}

export default Cart