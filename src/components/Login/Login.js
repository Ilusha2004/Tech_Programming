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
        <form onSubmit={handleSubmit} className='background'>
        <label className='login-name'>
            Имя пользователя:
            <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <p><label className='login-name'>
            Пароль:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label></p>
        <p><Link to='/' className='login-enter'>Войти</Link></p>
        </form>
    </Link>
  );
}

export default Login;
