//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt("Inserisci una parola per verificare se è palindroma");
const reverseduserWord = stringreverse(userWord);
const isuserWordpalindrome = isPalindrome(userWord);

function stringreverse(string) {
  const reversedstring = string.split("").reverse().join("");
  return reversedstring;
}

function isPalindrome(string) {
  const reversedstring = string.split("").reverse().join("");

  if (reversedstring === string) {
    return true;
  } else {
    return false;
  }
}

console.log(userWord);
console.log(reverseduserWord);
console.log("La tua parola: " + userWord);
console.log("La tua parola inversa: " + reverseduserWord);
console.log(
  isuserWordpalindrome
    ? `${userWord} è una parola palindroma!`
    : `${userWord} non è una parola palindroma!`
);
