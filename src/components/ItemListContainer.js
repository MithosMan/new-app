import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import lista from "./asyncMock"
import { useParams } from 'react-router-dom';

const ListContainer = () => {

  const [data, setData] = useState([])

  const {idPagina} = useParams();

  useEffect(()=>{
    const getData = new Promise( resolve => {
      setTimeout(() => {
        resolve(lista)
      },500)
    });

    if (idPagina){
      getData.then(res => setData(res.filter(lista => lista.tipo === idPagina)))
    } else {
      getData.then(res => setData(res))
    }

  },[idPagina])

  return (
    <div>
      <ItemList data={data}/>
    </div>
  )
}

  export default ListContainer