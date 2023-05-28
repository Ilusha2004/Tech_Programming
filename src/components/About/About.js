import React, { useContext } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import GlobalContext from '../Global/Global';

function About(props) {
  const { globalVariable } = useContext(GlobalContext);

  return (
    <div className='about'>
      <div className='about__head'>
        <input className='about__find' type="text" size={20} />
        <Link to='/login' className='about__login'>
          {globalVariable ? globalVariable : 'Login'}
        </Link>
      </div>
      <div className='about__bg'></div>
      <div className='container'>
        <h1 className='about__title'>{props.title}</h1>
        <div className='about__description'>{props.children}</div>
      </div>
    </div>

  );
}

export default About;
