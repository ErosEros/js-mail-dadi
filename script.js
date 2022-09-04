// chiedi la mail all'utente
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull'esito del controllo


//ESERCIZIO MAIL

// let emails = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

// // chiedo la mail all utente
// const mailUtente = prompt('fornire la mail');
// // console.log(mailUtente);

// // controllo che sia nella lista per accedere 

// for ( let i = 0; i < emails.length; i++){
//     // console.log(emails[i]);
//     if (mailUtente == emails[i])
//     {
//         alert('Accesso consentito'); // stampo il messaggio con l'esito del controllo positivo
//     }
    
// }

// metodo non convenziale : 

// if (mailUtente == emails[0]) { // verifico la prima mail
//     alert('Accesso consentito')
// }
// if (mailUtente == emails[1]) { // verifico la seconda mail 
//     alert('Accesso consentito')
// }
// if (mailUtente == emails[2]) { // verifico la terza mail
//     alert('Accesso consentito')
// }


// ESERCIZIO DEI DADI

// genero un numero random da 1 a 6, sia per me che per il computer
const giocatore =  Math.floor( Math.random() * 6) + 1 
console.log('GIOCATORE', giocatore)
const computer =  Math.floor( Math.random() * 6) + 1  
console.log('COMPUTER', computer)

// vince il giocatore
if (giocatore > computer) {
    console.log('GIOCATORE WIN')
}
// vince il computer

else if (giocatore < computer)
console.log('COMPUTER WIN')
// numero uguale : pareggio!

else (giocatore === computer)
console.log('PAREGGIO')

// Stabilire il vincitore, in base a chi fa il punteggio più alto.




