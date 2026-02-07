import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   
    if (!username.trim()) {
      setError('Имя не должно быть пустым');
      return;
    }
    if (username.length > 40) {
      setError('Имя не должно превышать 40 символов');
      return;
    }

 
    if (password.length < 8) {
      setError('Пароль должен быть не менее 8 символов');
      return;
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Имя пользователя" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Пароль" 
      />
      <input 
        type="password" 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Подтверждение пароля" 
      />
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegistrationForm;