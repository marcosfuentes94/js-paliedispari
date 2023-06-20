function giocaPariDispari() {
    // OPZIONI VALIDE PER LA SCELTA PARI O DISPARI
    const scelteValide = ["pari", "dispari"];
  
    // CHIEDI ALL'UTENTE DI SCEGLIERE PARI O DISPARI
    let sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
  
    // CONTINUA A RICHIEDERE LA SCELTA FINO A QUANDO NON VIENE INSERITA UN'OPZIONE VALIDA
    while (!scelteValide.includes(sceltaUtente)) {
      sceltaUtente = prompt("RILEGGI BENE! SCEGLI PARI O DISPARI").toLowerCase();
    }
  
    // CHIEDI ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
  
    // CONTINUA A RICHIEDERE IL NUMERO FINO A QUANDO NON VIENE INSERITO UN VALORE VALIDO
    while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
      numeroUtente = parseInt(prompt("RILEGGI BENE. INSERISCI UN NUMERO DA 1 A 5"));
    }
  
    // GENERA UN NUMERO CASUALE PER IL COMPUTER DA 1 A 5
    const numeroComputer = Math.floor(Math.random() * 5) + 1;
  
    // CALCOLA LA SOMMA DEI DUE NUMERI
    const somma = numeroUtente + numeroComputer;
  
    // VERIFICA SE LA SOMMA È PARI O DISPARI
    const risultato = somma % 2 === 0 ? "pari" : "dispari";
  
    // OTTIENI L'ELEMENTO HTML PER MOSTRARE IL RISULTATO
    const risultatoElement = document.getElementById("risultato");
  
    // AGGIUNGI IL RISULTATO NEL CONTENUTO HTML
    risultatoElement.innerHTML = `
      <p>Hai scelto: ${sceltaUtente}</p>
      <p>Il numero del computer è: ${numeroComputer}</p>
      <p>Il tuo numero è: ${numeroUtente}</p>
      <p>La somma dei numeri è: ${somma}</p>
      <p>La somma è: ${risultato}</p>
      <p class="${risultato === sceltaUtente ? 'win' : 'loss'}">${risultato === sceltaUtente ? 'HAI VINTO!' : 'HAI PERSO!'}</p>
    `;
  }
  
  // AVVIA IL GIOCO
  giocaPariDispari();
  