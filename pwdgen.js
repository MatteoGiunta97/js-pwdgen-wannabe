//Inserisci Nome
const userName = prompt('Inserisci il tuo nome');
//Inserisci Cognome
const userSurname = prompt('Inserisci il tuo cognome');
//Inserisci Colore
const userColor = prompt('Inserisci il tuo colore preferito');
//La tua password è
const yourPassword = userName + userSurname + userColor + 23;

document.getElementById('password').innerHTML = yourPassword;