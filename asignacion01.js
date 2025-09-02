const readline = require('readline-sync');
const array = [];
var rep = 0;
var max = 0;

function maxValue(num) {
    if (num < 0) {
        console.log("Agregar valores positivos");

    }
    else {
        if (num === 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i]
                }
            }
            for (let i = 0; i < array.length; i++) {
                if (array[i] === max) {
                    rep++;
                }
            }
        }
        else {
            array.push(num);
        }
    }


}

do {
    numbers = parseInt(
        readline.question(
            "Ingresa numeros enteros positivos (0 para terminar): "
        )
    );
    maxValue(numbers);
} while (numbers !== 0);

console.log(`El máximo es ${max} y aparece ${rep} veces.`);
