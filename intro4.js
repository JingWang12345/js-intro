//ARRAY

// let pippo = [15,3,23,34,21];

//let pluto = [1, 'ciao', false]  //MALISSIMO

// pippo.push(100);

// const pluto = pippo.pop();
// const paperino = pippo.pop();

// console.log(pippo);
// console.log(pluto);//100
// console.log(paperino);//21


// pippo.unshift(200); //[200, 15, 3, 23, 34, 21]

// const paperone = pippo.shift();
// const paperina = pippo.shift();

// console.log(pippo);
// console.log(paperone);
// console.log(paperina);

// console.log((pippo));
// pippo.pop()
// console.log(pippo);//a volte il log non è affidabile



// const arrayOfStrings =['andrea', 'jing', 'valentina', 'vlad']

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
    
// }


//1) scrivere una funzione che prende come parametro un array di
//   numeri e fa console.log dei numeri con la logica fizzbuzz
const pippo =[3,25,10,8,4];
function printArrayInFizzBuzzLogic(arrayOfNumber) {
    for (let i = 0; i < pippo.length; i++) {
        const element = pippo[i];
        if ((element % 3)===0 && (element % 5===0)) {
            console.log('FizzBuzz');
        } else if (element % 5===0) {
            console.log('Fizz');
        }else if (element % 3===0) {
            console.log('Buzz');
    } else {
        console.log(element);
    }
}
 }
printArrayInFizzBuzzLogic(pippo)

//2) scrivere una funzione che prende come parametro un array di
//   stringhe e logga quelle più piccole di 5 caratteri

//3) scrivere una funzione che prende come parametro una stringa e 
//   restituisce una stringa composta dai primi 5 caratteri convertiti in 
// maiuscolo

//4) scrivere una funzione che prende come parametro una stringa e
//restituisce la lunghezza della stringa senza spazi

//5)scrivere una funzione che prende come parametro una stringa e
// restituisce il numero degli spazi
