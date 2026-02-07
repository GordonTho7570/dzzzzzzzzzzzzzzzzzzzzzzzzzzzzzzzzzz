import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count + 5 <= 15) {
      setCount(count + 5);
    }
  };

  const handleDecrement = () => {
    if (count - 5 >= 0) {
      setCount(count - 5);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <h1>{count}</h1>
      
    
      {count >= 15 && <p>Значение не должно превышать 15</p>}

      <button onClick={handleIncrement}>+5</button>
      <button onClick={handleDecrement}>-5</button>
      <button onClick={handleReset}>Обнулить</button>
    </div>
  );
};

export default Counter;