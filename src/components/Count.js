import React,{useState} from 'react';

const Count = ({start, stock, carrito}) => {

  const [count, setCount] = useState(start);

  const menos = () => {
    setCount(count-1)
  }

  const mas = () => {
    setCount(count+1)
  }

  return (
      <div>
        <button onClick={menos} disabled={count<=1}>-</button>
        <span>{count}</span>
        <button onClick={mas} disabled={count>=stock}>+</button>
        <div disabled={stock<=0} onClick={()=>carrito(count)}><button>Comprar</button></div>
      </div>
    );
  }

  export default Count