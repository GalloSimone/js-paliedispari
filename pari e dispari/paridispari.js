//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

let userChoise = prompt("Pari o Dispari ? \n Scrivi la tua scelta:");
console.log("Hai scelto:" + " " + userChoise);

let userNumber = parseInt(prompt("Scegli un numero da 1 a 5:"));
console.log("Il tuo numero:" + " " + userNumber);

function randomNumberGenerate() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
  }

  const pcNumber = randomNumberGenerate();
  console.log("Il numero del PC:" + " " + pcNumber);


  const sum = userNumber + pcNumber;
  console.log(userNumber + "+" + pcNumber + "=" + " " + sum);
  function isoddOrEven(sum) {
    const odd = sum % 2 === 0;
    if (odd) { "Pari";
       
    } 
       else {
      return "dispari";
    }
  }

  const oddOrEven = isoddOrEven(sum);
  console.log(oddOrEven);


