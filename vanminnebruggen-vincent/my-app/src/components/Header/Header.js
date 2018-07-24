import * as React from 'react';
import { Link } from 'react-router-dom';
  
const Header = (props) => (
    <header>
        <div className="header-cocktail">
            <div className="navtitle">
                <Link to="/"><img className="header-logo"src={require('./cocktail-logo.svg')} alt="Logo Cocktail"/></Link>
                <Link to="/"><h1>Vincent's Cocktail Bar</h1></Link>
            </div>
            
            <ul className="nav">
                <li className="navitem"></li>
                <li className="navitem"><Link to="/">Home</Link></li>
                <li className="navitem"><Link to="/cocktail">Cocktails</Link></li>
                <li className="navitem"><Link to={`/cocktails/add/`}>Add Cocktail</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;
