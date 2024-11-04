"Use Strict";
console.clear();
/*
 Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente
*/

const numberUser = parseInt(prompt("Scrivi un numero: "));
let arrayNumberCubici = [];
if(!isNaN(numberUser)){
    for (let i = 0; i <= numberUser; i++) {
        arrayNumberCubici.push(i * i);
        if(i != 0 && i != 1){
            console.log(i + "| => al cubo: " + arrayNumberCubici[i])
        }
    }
}else{
    console.log("non hai inserito un numero.");
}
