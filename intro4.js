//ARRAY

//  let pippo = [15,3,23,34,21];

//let pluto = [1, 'ciao', false]  //MALISSIMO

//  pippo.push(100);

//  const pluto = pippo.pop();
// const paperino = pippo.pop();

//  console.log(pippo);
//  console.log(pluto);//100
//  console.log(paperino);//21


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

// const pippo =[3,25,10,8,4];
// function printArrayInFizzBuzzLogic(arrayOfNumber) {
//     for (let i = 0; i < pippo.length; i++) {
//         const element = pippo[i];
//         if (element % 3===0 && element % 5===0) {
//             console.log('FizzBuzz');
//         } else if (element % 5===0) {
//             console.log('Fizz');
//         }else if (element % 3===0) {
//             console.log('Buzz');
//     } else {
//         console.log(element);
//     }
// }
//  }
// printArrayInFizzBuzzLogic(pippo)

//2) scrivere una funzione che prende come parametro un array di
//   stringhe e logga quelle più piccole di 5 caratteri

const pluto = ['casa', 'armadio', 'gatto', 'perfetto', 'mano']
function printShorterThan5Chars(arrayOfStrings) {

    for (let i = 0; i < arrayOfStrings.length; i++) {
        const element = arrayOfStrings[i];

        console.log(element);
        if (element < 4) {
            console.log(element);
        }


    }

}


printShorterThan5Chars(pluto)
// //casa
//mano



//3) scrivere una funzione che prende come parametro una stringa e 
//   restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo


// function pickFirst5CharsAndMakeUpperCase(text) {

//     let result = "";

//     for (let i = 0; i < text.length; i++) {
//         if (i < 5) {
//             result += text[i];
//         }
//     }
//     return result;
//     result = textUpperCase;

// }







// console.log(pickFirst5CharsAndMakeUpperCase('deltaplano')) //DELTA

//4) scrivere una funzione che prende come parametro una stringa e
//restituisce la lunghezza della stringa senza spazi
// function lengthOfTextWithoutSpaces(text) {
//     countText = 0;

//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if (text[i] !== ' ') {
//             countText++;
//         } 
//     }return countText
// }


// console.log(lengthOfTextWithoutSpaces('il nano enorme')) //12



//5)scrivere una funzione che prende come parametro una stringa e
// restituisce il numero degli spazi


// function countSpaces(text) {
//     count = 0
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if (text[i] === ' ') {
//             count++;
//         }
//     }return count
// }

// console.log(countSpaces('il nano enorme')) //2