import React from 'react';
import Item from './Item';

const ItemList = ({data =[]}) => {
  return (
    data.map(lista => <Item key={lista.id} info={lista}/>)
  )
}


export default ItemList