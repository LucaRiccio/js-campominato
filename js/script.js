// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta,
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
// il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero
//  di volte che l’utente ha inserito un numero consentito.


var numeriPc = []; //array dei 16 numeri casuali
var numeriUtente = []; //array dei numeri inseriti dall'utente

// Prove con for
// for (var i = 0; i < 5; i++) {
//   numeriPc[i] = Math.floor((Math.random() * 100) + 1);
// }
//
// for (var i = 0; i < 5; i++) {
//   numeriUtente.push(parseInt(prompt("Inserisci un numero compreso tra 1 a 100")));
// }


while (numeriPc.length < 16) { // ciclo while, fino a quando la lunghezza di numeriPc è minore di 16
  var x = Math.floor((Math.random() * 100) + 1); // generazione numero casuale

  if (numeriPc.includes(x)==false) { //se includes() è falso pusha la x nell'array
    numeriPc.push(x);
  }
}

while (numeriUtente.length < 8) {
  var y = parseInt(prompt("Inserici un numero tra 1 e 100"));

  if (numeriUtente.includes(y)==true) {
    alert("Non puoi inserire un numero già usato");
  }else if (numeriUtente.includes(y)==false) {
    numeriUtente.push(y);
  }

  // else if (y == numeriPc[i]) {
  //   alert("Hai perso!");
  // }

}

console.log(numeriPc);
console.log(numeriUtente);
