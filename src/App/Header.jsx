import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul style={{listStyle: 'none', display: 'inline-block'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/country">Paises</Link>
                </li>
                <li>
                    <Link to="/persons">Personas</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
