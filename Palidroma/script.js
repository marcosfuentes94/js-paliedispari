// FUNZIONE PER VERIFICARE SE UNA PAROLA È PALINDROMA
function isPalindrome(word) {
// TRASFORMA LA PAROLA IN MINUSCOLO E RIMUOVE GLI SPAZI
const originalWord = word.toLowerCase().replace(/\s/g, '');
// INVERTE LA PAROLA
const reversedWord = originalWord.split('').reverse().join('');

// CONFRONTA LA PAROLA ORIGINALE CON LA PAROLA INVERTITA
return originalWord === reversedWord;
}

// RICHIEDE ALL'UTENTE DI INSERIRE UNA PAROLA TRAMITE UN PROMPT
const userInput = prompt("Inserisci una parola:");
// VERIFICA SE LA PAROLA INSERITA È PALINDROMA UTILIZZANDO LA FUNZIONE
const result = isPalindrome(userInput);

// STAMPA IL RISULTATO SULLA PAGINA HTML
if (result) {
document.write(`<p class="palindrome">La parola ${userInput} è palindroma!</p>`);
} else {
document.write(`<p class="not-palindrome">La parola ${userInput} non è palindroma.</p>`);
}