// Ejercico 1
console.log('Bienvenido al programa');

// Ejercicio 2
let name = 'Ana';
console.log(`Hola, ${name}!`);

// Ejercico 3
alert(`Hola, ${name}`);

// Ejercico 4
let question = prompt('¿Cuál es el lenguaje que más te gusta?');
console.log(question);

// Ejercico 5
let number1 = 4;
let number2 = 5;
let result = number1 + number2;
console.log(`La suma de ${number1} y ${number2} es igual a ${result}.`);

// Ejercicio 6
let valor1 = 7;
let valor2 = 3;
let result2 = valor1 - valor2;
console.log(`La diferencia de ${valor1} menos ${valor2} es igual a ${result2}.`);

// Ejercicio 7
let age = prompt('Ingresa tu edad');
if (age >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

// Ejercicio 8
let number = parseFloat('Ingresa un número');
if (number > 0) {
    console.log('El número es positivo');
} else if (number == 0) {
    console.log('El número es cero');
} else {
    console.log('El número es negativo');
}

// Ejercicio 9
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}

// Ejercicio 10
let note = 9;
if (note >= 7) {
    console.log('Aprpobado');
} else {
    console.log('Rerprobado');
}

// Ejercicio 11
let aleator = Math.random();
console.log(aleator);

// Ejercicio 12
let aleator1 = (Math.random() * 10) + 1;
console.log(aleator1);

// Ejercicio 13
let aleator2 = (Math.random() * 1000) + 1;
console.log(aleator2);

