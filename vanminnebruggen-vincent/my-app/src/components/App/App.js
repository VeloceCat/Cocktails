import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Loading from '../Loading/Loading';
import CocktailOverview from '../CocktailOverview/CocktailOverview';
import Header from '../Header/Header';
import CocktailAdd from '../CocktailAdd/CocktailAdd';
import CocktailEdit from '../CocktailEdit/CocktailEdit';
import Startpage from '../Startpage/Startpage';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/' component={Startpage} />
        <Route exact path='/loading' component={Loading} />
        <Route exact path='/cocktail' component={CocktailOverview} />
        <Route exact path='/cocktails/add' component={CocktailAdd} />
        <Route exact path='/cocktails/edit/:idDrink' component={CocktailEdit} />
        <Route path='*' component={Footer} />
      </div>
    );
  }
}

export default App;
