import React, { useState, useRef, useEffect } from 'react';

const Secundomer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };




  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <input ref={inputRef} type="text" />
      <p>Время: {seconds}</p>
      <button onClick={handleStart}>Старт</button>
      <button onClick={handleStop}>Стоп</button>
      
    </div>
    
  );
};

export default Secundomer;