/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/* DATI
//  Numero di chilometri
//  Età del passeggero
//  Prezzo del biglietto 0.21euro al km
*/
const numchilometri = prompt("Quanti chilometri?")
console.log(numchilometri);

const etàpasseggero = prompt("Quanti anni hai?");
console.log(etàpasseggero);

const prezzodelbiglietto = 0.21 * parseInt(numchilometri);
console.log(prezzodelbiglietto);

const sconto20 = ((prezzodelbiglietto / 100) * 20).toFixed(2);
const sconto40 = ((prezzodelbiglietto / 100) * 40).toFixed(2);

// ESECUZIONE LOGICA

/* Se il passeggero < 18 anni
    Paga prezzo del biglietto - sconto 20%
ALTRIMENTI SE passeggero > 65 anni
    Paga prezzo del biglietto - sconto 40%
ALTRIMENTI SE passeggero >= 18 anni
    Paga prezzo del biglietto intero
ALTRIMENTI SE passeggero <= 0 anni
    Messaggio di avviso "Si prega di inserire un età valida" // Questo va messo prima di tutto
*/

let message;


if (numchilometri <= 0) {
    message = `Si prega di inserire un dato valido`;
} else if (etàpasseggero <= 0) {
    message = `Si prega di inserire un'età valida`;
} else if (etàpasseggero < 18) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto20).toFixed(2)}€`;
} else if (etàpasseggero > 65) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto - sconto40).toFixed(2)}€`;
} else if (etàpasseggero >= 18) {
    message = `Il prezzo del biglietto è ${(prezzodelbiglietto).toFixed(2)}€`;
}


// OUTPUT

console.log(message);