import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='about__head'>
                <input className='header-find' type="text" size={20}/>
                <Link className='header-login'>Login</Link>
        </div>
    );
}

export default Header;
