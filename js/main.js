/**
 * 
 * 
 * GIOCO! CAMPO MINATO
 * Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
 * I numeri non possono essere duplicati
 * In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero
 * alla volta, sempre compreso tra 1 e 100.
 * L'utente non può inserire più volte lo stesso numero.
 * Se il numero è presente nella lista dei numeri generati (bombe),
 * la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
 * La partita termina quando il giocatore inserisce un numero "vietato"
 * o raggiunge il numero massimo possibile di numeri consentiti.
 * Al termine della partita il software deve comunicare il punteggio,
 * cioè il numero di volte che l'utente ha inserito un numero consentito.
 * 
 * 
 */

//  1. Generare x numeri casuali tra min e max

var nbombe = 2;
var nMax = 10;
var nMin = 1;
var counter = 0; //counter dei tentativi andati a buon fine

listabombe = generaNumeri(nbombe,nMin,nMax);

// Funzione generaNumeri()

function generaNumeri(num, min, max) {
    var listabombe = [];
    while (listabombe.length < num) {

        var numero = Math.round ( Math.random() * max ) + 1;

        if (! listabombe.includes(numero)) {
            listabombe.push(numero);
        }
    }

    return listabombe
}

// 2. Chiedere all'utente un numero compreso tra nMin e nMax
var tentativo = '';


for (var i = 0; i < nMax; i++) {
    var tentativo = parseInt( prompt('Inserisci un numero compreso tra ' + nMin + ' e ' + nMax + '!') );
    while (isNaN(tentativo) || tentativo < nMin || tentativo > nMax) {
        tentativo = parseInt( prompt('Inserisci un numero, VALIDO, compreso tra ' + nMin + ' e ' + nMax + '!') );
    }


// 3. Controllare che il numero NON sia uguale ad una delle bombe!
    var numeriTentati [];
if (! listabombe.includes(tentativo)) {
    alert('Nessuna Bomba qui! Continua!');
    numeriTentati.push(tentativo);
    counter++;
} else {
     
    alert('Bomba innescata! Hai perso!'); 
    break; 
}
}

console.log(tentativo);
console.log(listabombe);
console.log('Il numero di tentativi è: ', counter);