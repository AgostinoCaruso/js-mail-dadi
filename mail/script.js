"Use Strict";
console.clear();
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

const emailList = ["ciccio", "bubba", "buzzo", "bibbo"];
let emailUser = prompt("Scrivi la tua email: ");
let isFound = false;
for (let i = 0; i < emailList.length; i++) {
    console.log(emailUser, emailList[i]);
    if (emailUser == emailList[i]) {
        isFound = true;
        break;
    }
}
if (isFound) {
    console.log("L'email inserita è:" + emailUser + ", è un email presente nella lista");
} else {
    console.log("L'email inserita è:" + emailUser + ", ma non è un email presente nella lista");
}