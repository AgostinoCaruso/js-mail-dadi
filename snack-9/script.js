"Use Strict";
console.clear();

/*
Calcola la somma e la media dei primi 10 numeri.
*/

const primiNumeri = [0,1,2,3,4,5,6,7,8,9];
let sum = 0;
let med = 0;
primiNumeri.forEach(element => {
    sum += element;
});

med = sum / primiNumeri.length;

console.log("la somma è: " + sum + ", mentre la media è: " +med);