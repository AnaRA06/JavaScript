// Ejercicio 1: Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador < 11) {
    console.log(contador);
    contador++;
}


// Ejercicio 2: Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while (contador2 > 0) {
    console.log(contador);
    contador--;
}

// Ejercicio 3: Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numeroMax = prompt('Ingresa un número para la cuenta regresiva:');
while (numeroMax >= 0) {
    console.log(numeroMax);
    numeroMax--;
}

// Ejercicio 4: Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numero = prompt('Ingresa un número para la cuenta progresiva:');
let contador3 = 0;
while (contador <= numero) {
    console.log(contador3);
    contador3++;
}
