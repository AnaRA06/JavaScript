function masaCorporal(altura, peso) {
    return peso / (altura * altura);
}
let imc = masaCorporal(1.45, 40);
console.log(imc);

function factorial(numero) {
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
        factorial *= i;
        i++;
    }
    return factorial;
}
let result = factorial(6);
console.log(result);

function convertirADolares(cantidad) {
    return cantidad * 4.80;
}
let cantidad1 = convertirADolares(23);
console.log(cantidad1);

function areaYperimetro(altura, ancho) {
    let area = altura * ancho;
    let perimetro = (altura * 2) + (ancho * 2);
    return `El área es ${area} y el perímetro es ${perimetro}.`;
}
let sala = areaYperimetro(10.56, 6.43);
console.log(sala);

function areaYperimetroCircular(radio) {
    let area = 3.14 * (radio * radio);
    let perimetro = 2 * 3.14 * radio;
    return `El área es ${area} y el perímetro es ${perimetro}.`;
}
let salaCircular = areaYperimetroCircular(15.3);
console.log(salaCircular);

function tablaDeMultiplicar(numero1) {
    for (var i = 1; i <= 10; i++) {
        var result = numero1 * i;
        console.log(`${numero1} x ${i} es ${result}`);
    }
}
tablaDeMultiplicar(4);
