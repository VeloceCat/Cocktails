var request = require("request");

function getPublicData(callback){
   request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=o', function(error, response, body) {
       if (!error && response.statusCode == 200) 
       {
           result = (JSON.parse(body));
           return callback(null, result);
       } 
       else 
       {
           return callback(error, null);
       }
   });
}

module.exports = {getPublicData};