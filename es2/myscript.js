var numeriInseriti = [];

var somma = 0;

for (var i = 0; i < 10; i++) {

    var numero = parseInt(prompt("inserisci un numero"));
    numeriInseriti.push(numero);
    somma += numero;

}


console.log(numeriInseriti);
console.log(somma);

