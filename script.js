// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriCpu = new Array(16);
var numeriGiocatore = [];
console.log(numeriCpu.length);
var numeriInterni = 0;
var trovato = false;

while (numeriInterni <= numeriCpu.length) {
  var randomNum = Math.floor(Math.random()*(100-1))+1;
  var i = 0;

  while (i!=numeriCpu.length && trovato == false ) {
    console.log(1);
    if (randomNum==numeriCpu[i]) {
      trovato = true;
    }
    i++
  }

  if (trovato == false) {
    numeriCpu[numeriInterni]=randomNum;
  }
  numeriInterni++;
  console.log(2);

}


console.log(numeriCpu);
