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

//BONUS - I tre livelli di difficoltà

var difficolta = parseInt( prompt('A che livello di difficoltà, vuoi giocare?\n 0 (TEST)\n 1 (Facile)\n 2 (Medio)\n 3 (Difficile)'));
while (isNaN(difficolta) || difficolta < 0 || difficolta > 3) {
    tentativo = parseInt( prompt('A che livello di difficoltà, vuoi giocare?\n 1 (Facile)\n 2 (Medio)\n 3 (Difficile)') );
}

var nBombe = '';
var nMax = '';

switch (difficolta) {
    case 0:
    nBombe = 2;
    nMax = 10;
    difficolta = 'Test';
    break;

    case 1:
    nBombe = 16;
    nMax = 100;
    difficolta = 'Facile';
    break;



    case 2:
    nBombe = 16;
    nMax = 80;
    difficolta = 'Medio';
    break;


    case 3:
    nBombe = 16;
    nMax = 50;
    difficolta = 'Difficile';
    break;


}

//  1. Generare x numeri casuali tra min e max

var nMin = 1;
var counter = 0; //counter dei tentativi andati a buon fine

listabombe = generaNumeri(nBombe,nMin,nMax);

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


for (var i = 0; i < (nMax - nBombe); i++) {
    var numeriTentati = [];
    var tentativo = parseInt( prompt('Inserisci un numero compreso tra ' + nMin + ' e ' + nMax + '!') );
    while (isNaN(tentativo) || tentativo < nMin || tentativo > nMax || numeriTentati.includes(tentativo)) {
        tentativo = parseInt( prompt('Inserisci un numero, VALIDO, compreso tra ' + nMin + ' e ' + nMax + '!') );
    }


// 3. Controllare che il numero NON sia uguale ad una delle bombe!
if (! listabombe.includes(tentativo)) {
    alert('Nessuna Bomba qui! Continua!');
    numeriTentati.push(tentativo);
    counter++;
} else {
    alert('Bomba innescata! Hai perso!'); 
    break; 
}
}



document.getElementById('difficolta').innerHTML = difficolta;
document.getElementById('nmin').innerHTML = nMin;
document.getElementById('nmax').innerHTML = nMax;
document.getElementById('nbombe').innerHTML = nBombe;
document.getElementById('counter').innerHTML = counter;
document.getElementById('bombe').innerHTML = listabombe;
