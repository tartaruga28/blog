import { useState } from 'react';
import './Counter.css';

function Counter({ defaultNumero = 0, increment = 1}) {
    const [numero, setNumero] = useState(defaultNumero)
    const increaseNumero = () => setNumero(numero + increment)
    const decreaseNumero = () => setNumero(numero - increment)
    return (
      <div className="Counter">
        <button onClick={decreaseNumero}>-</button>
        <span>{numero}</span> 
        <button onClick={increaseNumero}>+</button>
      </div>
    )
  }

export default Counter;