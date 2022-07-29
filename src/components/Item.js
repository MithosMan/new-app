import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {

return (
  <Link to={'/detalle/'+info.id}>
    <img src={info.imagen}></img>
    <h2>{info.titulo}</h2>
  </Link>
  );
}


export default Item