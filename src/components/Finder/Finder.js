import React from 'react';
import './Finder.css';

function Finder(props) {
    return (
        <div className='finder'>
            <input className='finder__find' type="text" size={20}/>
        </div>
    );
}

export default Finder;
