const config = require('../config');

const datahandler = require('../getPublicData');
const appRouter = (app) => {

    datahandler.getPublicData((err, result) => {
        /*let tasks = require('../tasks');*/
        
        let cocktails = result.drinks;

        // GET ALL COCKTAILS
        app.get('/cocktails', (req, res) => {
            console.log('Get all cocktails');

            if(cocktails && cocktails.length) {
                res.send({
                    status: config.STATUS.OK,
                    message: cocktails,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any cocktails',
                });
            }   
        });

        // GET COCKTAIL DETAILS
        app.get('/cocktails/:idDrink', (req, res) => {
            let cocktail = null;
            console.log('Get cocktail', req.params.idDrink);

            if(cocktails && cocktails.length) {
                cocktail = cocktails.filter((cocktail) => ('' + cocktail.idDrink) === req.params.idDrink);
            }
            if(cocktail) {
                res.send({
                    status: config.STATUS.OK,
                    message: cocktail[0],
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find any cocktail',
                });
            }   
        });

        // UPDATE COCKTAIL
        app.put('/cocktails/:idDrink', (req, res) => {
            let cocktail = null;
            console.log('update cocktail', req.body);

            if(cocktails && cocktails.length) {
                cocktail = cocktails.filter((cocktail) => ('' + cocktail.idDrink) === req.params.idDrink);
            }

            if(cocktail[0]) {
                cocktails = cocktails.map((s) => {
                    return ('' + s.idDrink) === req.params.idDrink ? req.body : s;
                })
                res.send({
                    status: config.STATUS.OK,
                    message: req.body,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not find cocktail for update',
                });
            }


        });
        
        // REMOVE COCKTAIL
        app.delete('/cocktails/:idDrink', (req, res) => {
            console.log('Remove cocktail', req.params.idDrink);
            cocktails = cocktails.filter((cocktail) => ('' + cocktail.idDrink) !== req.params.idDrink);

            res.send({
                status: config.STATUS.OK,
                message: cocktails,
            });
        });

        // ADD COCKTAIL
        app.post('/cocktails/add', (req, res) => {
            const maxIndex = Math.max.apply(Math,cocktails.map((o) => o.idDrink));
            console.log('Add cocktail', req.body, maxIndex);
            let cocktail = req.body;
            cocktail.idDrink = maxIndex + 1;

            cocktails.push(cocktail);

            if(cocktails[cocktails.length - 1] === cocktail) {
                res.send({
                    status: config.STATUS.OK,
                    message: cocktail,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'Could not add cocktail',
                });
            }
        });
    });
}

module.exports = appRouter;