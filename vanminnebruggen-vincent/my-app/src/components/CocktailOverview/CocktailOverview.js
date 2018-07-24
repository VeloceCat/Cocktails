import * as React from 'react';
import Cocktail from '../Cocktail/Cocktail';
import * as cocktailService from '../../services/cocktails.service';
/*import { Link } from 'react-router-dom';*/
export default class CocktailOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [],
            search: ''
        };
    }

    // React lifecycle event
    // https://reactjs.org/docs/react-component.html#the-component-lifecycle
    componentWillMount() {
        cocktailService.getAll().then(response => this.setState({ cocktails: response.message }));
    }

    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }

    renderCocktails(){
        let filteredCocktails = this.state.cocktails.filter(
            (cocktail) => {
                return (cocktail.strDrink.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) 
                || (cocktail.strCategory.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
            }
        );
        return(
            <div className="cocktail-items">
                {filteredCocktails.map((cocktail)=> {
                    return <div className="cocktail-item" key={cocktail.idDrink}><Cocktail strDrink={cocktail.strDrink} strCategory={cocktail.strCategory} strInstructions={cocktail.strInstructions} idDrink={cocktail.idDrink}/></div>
                })}
            </div>
        )
    }

    render() {
        if(!this.state.cocktails) return <div className="loadingbox"><div className="loading-animation"></div></div>
        return (
            <div className="main">
                <div className="homebox">
                    <h1>Cocktail Library</h1>
                    <p>You can find all cocktails right here</p>
                </div>
                <div className="overviewbox">
                    <div className="searchbox">
                        <input type="text" placeholder="Search the name of a cocktail" className="form-control"
                        value={this.state.search} onChange={this.updateSearch.bind(this)} />
                    </div>
                    
                    <div className="listbox cfx">
                        {this.state.cocktails.length ? this.renderCocktails() : (<img src={require('./cocktail-logo.svg')}  alt="Cocktail"/>)}
                    </div>
                </div>
            </div>
        );
    }
};