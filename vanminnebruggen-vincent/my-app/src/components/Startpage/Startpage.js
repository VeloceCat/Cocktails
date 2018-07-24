import * as React from 'react';
import { Link } from 'react-router-dom';
export default class Startpage extends React.Component {
    
    render() {
        return (
            <div>
                <div className="main">
                    <div className="homebox">
                        <h1>Vincent's Cocktail Bar</h1>
                        <p>Let the cocktail make your day</p>  
                    </div>      
                    <div className="infobox">
                        <button><Link to="/cocktail">Browse Cocktails</Link></button>
                        <button><Link to={`/cocktails/add/`}>Add Cocktail</Link></button>
                    </div>            
                </div>
            </div>
        );
    }
};