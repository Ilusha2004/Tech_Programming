import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Обработка входа пользователя
  };

  return (
    <Link to={'/login'} className='port'>
      <div id="centerLayer">
        <span className='social'>
          <button className='social_button_1'></button>
          <button className='social_button_2'></button>
        </span>
        <form onSubmit={handleSubmit} className='background'>
          <label className='login-name'>
              Имя пользователя:
              <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
        <p>
        <label className='login-name'>
            Пароль:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label></p>
        <p><button className='buttons'>Войти</button>
          <Link to='/' className='login-enter'>Войти</Link></p>
        </form>
        </div>
    </Link>
  );
}

export default Login;
