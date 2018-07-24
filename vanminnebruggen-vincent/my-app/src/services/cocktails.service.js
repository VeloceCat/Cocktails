export const getAll = () => {
    return fetch('http://localhost:1337/cocktails').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (idDrink) => {
    return fetch(`http://localhost:1337/cocktails/${idDrink}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const update = (idDrink, cocktail) => {
    return fetch(`http://localhost:1337/cocktails/${idDrink}`, { 
        method: 'PUT', 
        body: JSON.stringify(cocktail),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (idDrink) => {
    return fetch(`http://localhost:1337/cocktails/${idDrink}`, { 
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const add = (cocktail) => {
    return fetch('http://localhost:1337/cocktails/add', { 
        method: 'POST',
        body: JSON.stringify(cocktail),
        mode: 'cors', 
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}