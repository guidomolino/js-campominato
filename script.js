// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// genero i 16 dati casuali per la cpu

var numeriCpu = [];
var maxNumeri = 16;

while (numeriCpu.length < maxNumeri) {

  var randomNum = getRandom(1,100);
  //mi assicuro che i dati non si ripetino tra di loro
  var esisteCpu = giaPresente(numeriCpu, randomNum);

  if (esisteCpu == false) {
    numeriCpu.push(randomNum);
  }

}

console.log(numeriCpu);

// chiedo all'utente di inserire i numeri
var numeriUtente = [];
var maxQuantita = 100;
var minQuantita = 1;
var quantita = maxQuantita - maxNumeri;

var punteggio = 0;
var vinto = false;
var perso = false;

// il ciclo si ripete fino a quando l'array numeriUtente non raggiunge la quantità massima di numeri rimanenti disponibili
while (punteggio < quantita || perso = false) {
  var playerNum = prompt("Inserisci un numero compreso tra 1 e 100:");
  // mi assicuro che non ripeta lo stesso numero con nessuno dei precedenti da lui inseriti
  var esisteUtente = giaPresente(numeriUtente, playerNum);
  //controllo che non sia tra i numeri della cpu
  var esistePlayerCpu = giaPresente(numeriCpu, playerNum);


  if (esisteUtente == false && esistePlayerCpu == false && vinto = false) {
    numeriUtente.push(playerNum);
    console.log("E' corretto!");
    // incremento il punteggio a ogni ciclo corretto
    punteggio++;
    console.log("Punti attuali:", punteggio);
  }else {
    console.log("Sbagliato! Hai perso");
    perso = true;

  }
  // condizione di vittoria
  if (punteggio == quantita) {
    console.log("Hai vinto!");
    vinto = true;
  }

}

// funzione per trovare i numeri già presenti all'interno dell'array specificato
function giaPresente(array, elemento) {
  var i = 0;
  var trovato = false;

  while (i<array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }

  return trovato;
}

// funzione per generare un numero casuale intero tra i due valori minimo e massimo
function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min))+min;
}
