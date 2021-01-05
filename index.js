// Map
// 1
// Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10,
// y guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo
// const numeros = [1, 2, 3, 4, 5];

let numeros = [1, 2, 3, 4, 5];

const numerosMasDiez = (elemento)=>{
    return elemento + 10
}

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numeros.map(numerosMasDiez)); // [11, 12, 13, 14, 15]


// 2
// Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, 
// y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo

const numeros2 = [3, 7, 13, 99];

const dobles =(elemento)=>{
    return elemento*2
}


console.log(numeros2); // [3, 7, 13, 99]
console.log(numeros2.map(dobles)); // [6, 14, 26, 198]