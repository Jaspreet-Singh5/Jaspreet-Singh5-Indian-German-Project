import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = props => (
    <button className="Button">
        <Link to=''>{props.children}</Link>        
    </button>
);

export default button;