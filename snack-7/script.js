"Use Strict";
console.clear();

/*
Stampa le potenze di 2 fino a 1000
*/

const exponent = 2;
let currentNum = 1;
let lap = 1;
while(currentNum <1000 && lap <=100){
    currentNum*=exponent;
    console.log(currentNum + "| lap: " + lap);
    lap ++;
}
