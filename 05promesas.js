// Promesa JS
// Tipo de dato 
// En la generación de la promesa disponemos de dos métodos resolve() y reject()
// para manejar los datos o error a enviar
// En la resolución o consumo de este tipo de dato promesa disponemos de 
// dos métodos then() y catch() para recibir datos o error

// Por ejemplo vamos a declarar una función que devuelve una promesa

const users = ['Juan Pérez','Laura Gómez', 'Pilar López'];

const getUser = (position) => {
    return new Promise((resolve, reject) => {
        if(position < 0 || position >= users.length) {
            reject({message: 'La posición no es válida'});
        }
        setTimeout(() => { // Simulamos asincronía
            resolve({user: users[position]});
        }, 3000)
        
    })
}


// En la invocación de la función que devuelve una promesa usamos los métodos then() y catch()

getUser(2)
    .then(data => { // Una callback que recibe como primer argumento la data de resolve
        console.log(data);
        return data.user;
    }) 
    .then(data => { // Podemos concatenar then() para modificar los datos (pipe)
        console.log(data); // recibimos el valor del then precedente
    })
    .catch(err => { // Una callback que recibe como primer argumento el error de reject
        console.log(err);
    }) 

// console.log(getUser(1)); // Aparecerá como pendiente de resolver
