function saludo() {
    console.log('Hola Mundo!');
    return;
}
saludo();


function saludoConNombre(nombre) {
    console.log(`¡Hola ${nombre}!`);
    return;
}
saludoConNombre('Paulina');


function dobleDeNumero(numero) {
    return numero * 2;
}
let doble = dobleDeNumero(4);
console.log(doble);


function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let resultado = promedio(7, 4, 9);
console.log(resultado);


function numeroMayor(numero1, numero2) {
    if (numero1 < numero2) {
        return numero2;
    } else {
        return numero1;
    }
}
let mayor = numeroMayor(5, 2);
console.log(mayor);

function numeroMayor2(a, b) {
    return a > b ? a : b;
}
let mayor2 = numeroMayor2(6, 7);
console.log(mayor2);


function multiplicarPorSiMismo(numero) {
    return numero * numero;
}
let resultado1 = multiplicarPorSiMismo(6);
console.log(resultado1);
