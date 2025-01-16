// Ejercicio 1
alert('Bienvenido y bienvenida a nuestro sitio');
let weekDay = prompt('Ingresa un día de la semana:');
if (weekDay == 'Sábado' || weekDay == 'Domingo') {
    alert('Buen fin de semana!');
} else {
    alert('Buena semana!');
}


// Ejercicio 2
let number = prompt('Ingresa un número:');
if (number < 0) {
    alert('El número es negativo');
} else if (number > 0) {
    alert('El número es positivo');
} else {
    alert('El número es 0');
}


// Ejercicio 3
let puntuacion = 240;
if (puntuacion >= 100) {
    console.log('Felicidades, has ganado!');
} else {
    console.log('Intentalo de nuevo!');
}


// Ejercicio 4
alert('Bienvenido a tu cuenta de saldo');
let saldo = 1000;
alert(`El valor de tu saldo es: ${saldo}`);


// Ejercicio 5
let name = prompt('Ingresa tu nombre:');
alert(`Bienvenid@, ${name}`);