import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import lista from "./asyncMock"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [data, setData] = useState({})

  const {idDetalle} = useParams();

  useEffect(()=>{
    const getData = new Promise( resolve => {
      setTimeout(() => {
        resolve(lista)
      },500)
    });

      getData.then(res => setData(res.find(lista => lista.id === idDetalle)))
    
  },[])

  return (
    <div>
      <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer