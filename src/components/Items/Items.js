import React from 'react';
import './Items.css';

import { Link } from 'react-router-dom';

function Items({ Adres }) {
        return (
            <Link to={'/find'}>
                <div className='cover'>
                    <img
                        className='flag'
                        src={Adres.screenshot}
                        alt={Adres.title}
                    />
                    <div className='item'>{Adres.title}</div>
                </div>
            </Link>
        );
}

export default Items;
