"Use Strict";
console.clear();

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const pcNumb = GenerateRndNumb();
const userNumb = GenerateRndNumb();


if(pcNumb > userNumb){
    //vince pc
    console.log("Ha vinto il pc con:" + pcNumb + ", contro il: " + userNumb + ", del player");
}else if(userNumb > pcNumb){
    //vince player
    console.log("Ha vinto il player con:" + userNumb + ", contro il: " + pcNumb + ", del pc");
}else{
    //patta
    console.log(`Il risultato è pareggio.(pc:${pcNumb}, user:${userNumb})`);
}

function GenerateRndNumb(){
    return Math.floor(Math.random()* 6+1);
}


