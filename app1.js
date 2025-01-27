let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function intento1() {
    console.log('El botón fue clicado!');
}

function intento2() {
    let city = prompt('Indica el nombre de una ciudad de Brasil:');
    alert(`Estuve en ${city} y me acordé de tí.`);
}

function intento3() {
    alert('Yo amo JS');
}

function intento4() {
    let number1 = parseInt(prompt('Escriba un número'));
    let number2 = parseInt(prompt('Escriba un número'));
    let result = number1 + number2;
    alert(`${number1} + ${number2} es igual a ${result}`);
}
