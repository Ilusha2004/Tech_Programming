import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className='header'>
            <table>
                <tr>
                    <td>
                        <div className='container'>
                            <Link to='/' className='header-brand'>
                                {props.brand}
                            </Link>
                        </div>
                    </td>
                    <td>
                        <div className='container'>
                            <Link to='/login' className='header-login'>login</Link>
                        </div>
                    </td>
                </tr>
            </table>

        </header>
    );
}

export default Header;
