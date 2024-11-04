"Use Strict";
console.clear();
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

//contiene la chiocciola? contiene il .com o .it?

const emailList = ["ciccio@gmail.com", "bubba@gmail.com", "buzzo@hotmail.it", "bibbo@hotmail.it"];
let emailUser = prompt("Scrivi la tua email: ");
let isFound = false;
//controllo prima di iterarla nel for se l'email è idonea e se presenta i caratteri indispensabili
let isIdoneo = emailUser.includes("@") && (emailUser.includes(".com")) || (emailUser.includes(".it"));
if (isIdoneo) {//se è idonea
    for (let i = 0; i < emailList.length; i++) {
        //console.log(emailUser, emailList[i]);
        if (emailUser == emailList[i]) {
            isFound = true;
            break;//blocco il flusso del for se è stata trovata
        }
    }
    if (isFound) {
        console.log("L'email inserita è:" + emailUser + ", è un email presente nella lista!");
    } else {
        console.log("L'email inserita è:" + emailUser + ", ma non è un email presente nella lista!!");
    }
}else{
    console.log("non hai inserito dell'email valide");
}