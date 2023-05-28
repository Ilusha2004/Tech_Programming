import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../Global/Global';
import './Login.css';

function App() {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'админ') {
      setGlobalVariable(username); // Обновляем глобальную переменную
      history.push('/admin');
    } else {
      history.push('/');
    }
  };

  return (
    <div className='port'>
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
            </label>
            <button type="submit" className='login-enter'>Войти</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
