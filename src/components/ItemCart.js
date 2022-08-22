import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const ItemCart = ({producto}) => {

const {deleteOne} = useContext(CartContext)



  return (
    <div className={producto.id}>
      <img src={producto.imagen} alt={producto.titulo}/>
      <div>Titulo:{producto.titulo}</div>
      <div>Cantidad:{producto.cantidad}</div>
      <div>${producto.obolos} c/u</div>
      <div>Subtotal: {producto.cantidad*producto.obolos}</div>
      <button onClick={()=>deleteOne(producto.id)}>Eliminar</button>
    </div>
    
  )
}

export default ItemCart