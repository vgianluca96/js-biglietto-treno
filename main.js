
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

//console.log('Il prezzo base è ', String(price), 'euro');

let discount;
// Applicazione sconti
if (age < 18) {
    price = price * 0.8;
    // Arrontondamento a due cifre decimali
    price = Math.round(price*100)/100;
    console.log('Il prezzo con sconto minorenni è ', String(price), 'euro');
    discount = 'sconto minorenni';
} else if (age > 65) {
    price = price * 0.6;
    // Arrontondamento a due cifre decimali
    price = Math.round(price*100)/100;
    console.log('Il prezzo con sconto over 65 è ', String(price), 'euro');
    discount = 'sconto over 65';
} else {
    // Arrontondamento a due cifre decimali
    price = Math.round(price*100)/100;
    console.log('Il prezzo è ', String(price),"euro, non sono previsti sconti per questa fascia d'età");
    discount = "non sono previsti sconti per questa fascia d'età";
}

// Stampa in pagina
document.getElementById('distance').innerHTML = distance;
document.getElementById('age').innerHTML = age;
document.getElementById('price').innerHTML = price;
document.getElementById('discount').innerHTML = discount;
