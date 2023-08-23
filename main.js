
// Richiesta numero chilometri ed età
let distance = prompt('Digitare il numero di km che si vogliono percorrere');
let age = prompt("Digitare l'età del passeggero");

// Conversione dei dati input in numeri
distance = Number(distance);
age = Number(age);

// Costo al km
const unitCost = 0.21;

// Prezzo biglietto
let price = unitCost * distance;

console.log('Il prezzo base è ', String(price), 'euro');

// Applicazione sconti
if (age < 18) {
    price = price * 0.8;
    console.log('Il prezzo con sconto minorenni è ', String(price), 'euro');
} else if (age > 65) {
    price = price * 0.6;
    console.log('Il prezzo con sconto over 65 è ', String(price), 'euro');
} else {
    console.log("Non sono previsti sconti per questa fascia d'età");
}
