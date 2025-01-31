// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos(vector) {
    return vector;
}
let vector = mostrarElementos(lenguajesDeProgramacion);
console.log(vector);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosInversos() {
    for (let i = lenguajesDeProgramacion.length -1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarElementosInversos();

// Crea una función que calcule el promedio de los elementos en una lista de números.
function promedioDeElementos(vector) {
    let sum = 0;
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i];
    }
    let promedio = sum / vector.length;
    return promedio;
}
let resultado = promedioDeElementos([5, 7, 3, 6]);
console.log(resultado);

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function MaxMin(vector) {
    let max = vector[0];
    let min = vector[0];
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] > max) {
            max = vector[i];
        }
        if (vector[i] < min) {
            min = vector[i];
        }
    }
    return `El número máximo es ${max} y el número mínimo es ${min}`;
}
let vector1 = MaxMin([23, 17, 45, 32, 69]);
console.log(vector1);

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeElementos(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }
    return suma;
}
let vector2 = sumaDeElementos([8, 6, 9, 5]);
console.log(vector2);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicionDeElemento(vector, elemento) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === elemento) {
            return i;
        }
    }
    return -1;
}
let vector3 = posicionDeElemento(['Ana', 'Luis', 'Jose'], 'Luis');
console.log(vector3);

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaDeVectores(vector1, vector2) {
    return vector1.map((num, index) => num + vector2[index]);
}
let vector4 = sumaDeVectores([5, 7, 3], [8, 2, 9]);
console.log(vector4);

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeElementos(vector) {
    for (let i = 0; i < vector.length; i++) {
        return vector.map(num => num ** 2);
    }
}
let vector5 = [5, 4, 7, 9];
console.log(cuadradoDeElementos(vector5));