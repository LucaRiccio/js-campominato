// DESCRIZIONE: Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati
//In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta,sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina,altrimenti si continua chiedendo all'utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// 1- Creo array bombe senza numeri ripetuti
var bombe = [];
var massimo = 100; //verrà utilizzato più volte, lo inserisco in var per renderlo "costante"

//BONUS

do { // Controllo sul livello scelto dall'utente.
  var scelta = parseInt(prompt("Inserisci un livello di difficoltà: 0, 1 oppure 2"));
} while (scelta !=0 && scelta !=1 && scelta !=2);

switch (scelta) {
  case 0:
  massimo = 100;
  break; //IMPORTANTE, NECESSARIO USARE IL BREAK
  case 1:
  massimo = 80;
  break;
  case 2:
  massimo = 50;
  break;
}

while (bombe.length < 16) {
  var numero = numeroRandom(1,100);
  if (ricerca(bombe,numero)==false) {
    bombe.push(numero);
  }
}
console.log(bombe);

//2 - Creo l'array in cui l'utente inserisce i numeri
var possibilita = massimo - bombe.length;
var numeri = [];
var number; //"creata" nel ciclo in cui l'utente inserisce i numeri; Visto il successivo riutilizzo inizializzata direttamente qui.
var trovato = false //variabile creata con valore booleano in modo da utilizzarla per il check bombe.

while (numeri.length < possibilita && trovato == false) {  // aggiunta doppia condizione per uscire dal ciclo.
  number = parseInt(prompt("Inserisci un numero che sia compreso tra 1 e " + massimo));
  //controllo dell'input
  while (number <= 0 || number > massimo) {
    number = parseInt(prompt("Attenzione, il valore non è valido; Inserisci un numero che sia compreso tra 1 e " + massimo));
  }

  //controllare che il numero non sia una bomba.
  if (ricerca(bombe,number)) {
    trovato = true;
    alert("Gioco finito, hai trovato una bomba! Numero di tentativi: " + (numeri.length+1));
  }else if (ricerca(numeri,number) == false) {
    numeri.push(number)
  }else {
    alert("Attenzione, il numero scelto è già presente; Riprova!")
  }
}

if (trovato == false) {
  alert("Hai vinto");
}else {
  alert("Gioco finito, hai trovato una bomba! Numero di tentativi: " + (numeri.length+1));
}
console.log(numeri);


// **FUNZIONI**

//Funzione per numero casuale tra due valori da indicare
function numeroRandom(min,max){
  return Math.floor(Math.random()* (max - min + 1) + min);
}

//Funzione per verificare la presenza di un elemento in un array
function ricerca(arr,num) {
  var i = 0;
  while (i < arr.length) {
    if (num == arr[i]) {
    return true;
    }
    i++
  }
  return false;
}
