let nome;
let cognome;
let colorePreferito;
const numero = 21;
let password;

nome = prompt('Inserisci il tuo nome');
cognome = prompt('Inserisci il tuo cognome');
colorePreferito = prompt('Inserisci il tuo colore preferito');

password = nome + cognome + colorePreferito + numero;
console.log('La tua nuova password è ' + password);

document.getElementById('nome').innerHTML = nome;
document.getElementById('password').innerHTML = password;

// console.log('Il nome inserito è ' + nome);
// console.log('Il cognome inserito è ' + cognome);
// console.log('Il colore preferito inserito è ' + colorePreferito);
// console.log(
//     `La tua nuova password è ${nome}${cognome}${colorePreferito}${numero}`
// );

