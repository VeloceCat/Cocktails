import * as React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = (props) => (
    <div className="cocktailbox">
        <h3 className="cocktail-name"><img className="cocktail-logo"src={require('./cocktail-logo.svg')} alt="Logo Cocktail"/>{props.strDrink}</h3>
        <p className="cocktail-category">{props.strCategory}</p>

        <div className="btn-group actions" role="group">
            <Link to={`/cocktails/edit/${props.idDrink}`}>
                <button type="button" title="Edit this cocktail"><span className="glyphicon glyphicon-edit " aria-hidden="true"></span> Edit</button>
            </Link>
        </div>
    </div>
);

export default Cocktail;