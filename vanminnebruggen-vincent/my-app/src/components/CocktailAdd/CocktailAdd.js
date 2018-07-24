import React from 'react';
import * as cocktailService from '../../services/cocktails.service';

class CocktailAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cocktail: {
                strDrink: '',
                strCategory: '',
            },
            
            strDrinkIsValid : true,
            strCategoryIsValid : true,
        };
    }

    updatestrDrink(strDrink) {
        this.setState({
            ...this.state,
            cocktail: {
                ...this.state.cocktail, 
                strDrink,
                name: `${strDrink}`,
            }
        });
    }

    updatestrCategory(strCategory) {
        this.setState({
            ...this.state,
            cocktail: {
                ...this.state.cocktail,
                strCategory,
                name: `${strCategory}`,
            }
        });
    }

    onSubmit(e) {
        e.preventDefault(); // stop default form submit
        if(this.checkForm())
        {
            cocktailService.add(this.state.cocktail).then(() => this.props.history.push('/cocktail'));
        }
    }

    checkForm(){   
        var formIsValid = true; 
        if(this.state.cocktail.strDrink.length < 2){
            this.setState({strDrinkIsValid : false})
            formIsValid = false;
        }

        if(this.state.cocktail.strCategory.length < 10 || this.state.cocktail.strCategory.match(/[0-9]/i)){
            this.setState({strCategoryIsValid : false})
            formIsValid = false;
        }

        return formIsValid;
    }


    render(){
        return(
            
            <div className="main">
                <div className="homebox">
                    <h1>Add Cocktail</h1>
                    <p>You can add your favorite cocktail here</p>
                </div>
                <div className="formbox">
                    <form action="" onSubmit={(e) => this.onSubmit(e)}>
                        <div className="form-group cocktail-name">
                            <label htmlFor="strDrink">Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="text" 
                            placeholder="Name..." 
                            name="strDrink" 
                            value={this.state.cocktail.strDrink} 
                            onChange={(e) => this.updatestrDrink(e.target.value)}/>
                            <div className="errorbox">
                                <p className="cocktail-error"> {this.state.strDrinkIsValid? '': 'The name must contain at least two letters or numbers!'}</p>
                            </div>
                        </div>
                        <div className="form-group cocktail-category">
                            <label htmlFor="strCategory">Category</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="text" 
                            placeholder="Category..." 
                            name="strCategory" 
                            value={this.state.cocktail.strCategory} 
                            onChange={(e) => this.updatestrCategory(e.target.value)}/>
                            <div className="errorbox">
                                <p className="cocktail-error"> {this.state.strCategoryIsValid? '' : 'The category must contain at least 10 characters and can not contain any numbers!'}</p>
                            </div>
                        </div>

                        <button type="submit" className="save-cocktail-button">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add this cocktail
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}
export default CocktailAdd;