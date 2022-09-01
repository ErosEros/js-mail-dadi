// chiedi la mail all'utente
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull'esito del controllo

let emails = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];

// chiedo la mail all utente
const mailUtente = prompt('fornire la mail');
// console.log(mailUtente);

// controllo che sia nella lista per accedere 

for ( let i = 0; i < emails.length; i++){
    // console.log(emails[i]);
    if (mailUtente == emails[i])
    {
        alert('Accesso consentito');
    }
    
}

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
