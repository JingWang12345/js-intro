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


// const indexOfJing = arrayOfStrings.indexOf('jing');
// console.log(indexOfJing);
// const indexOfSimone = arrayOfStrings.indexOf('simone');
// console.log(indexOfSimone);
// arrayOfStrings[0] = 'pietro';
// console.log(arrayOfStrings);


//-------------------------------------------------------------------
//OGGETTI

// const andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     isMarried: false,
//     pupils: ['davide', 'jing', 'valentina', 'vlad'],
//     dog:{
//         name:'ariel',
//         breed:'border-collie'
//     },
//     "cool car": "bmw"
// }

// console.log(andrea);

// console.log(andrea.surname);

// console.log(andrea['yob']);

// console.log(andrea['cool car']);


// const jing = {
//     name: 'Jing',
//     surname: 'Wang',
//     yob: 1993,
//     nickname: 'jinny',
//    email: 'wangjing061994@gmail.com'
//     }

// const daniele = {
//     name: 'Daniele',
//     surname: 'Puggioni',
//     yob: 1999,
//     nickname: 'Pooh',
//     email: 'danielepuggioni@gmail.com'
//         }

        
// const francesco = {
//     name: 'Francesco',
//     surname: 'Badile',
//     yob: 1993,
//     nickname: 'SunshineMocha',
//     email: 'sunshinemocha@gmail.com'
//         }

        
// const simone = {
//     name: 'Simone',
//     surname: 'Maccarone',
//     yob: 2003,
//     nickname: 'codebreaker',
//     email: 'simonemaccarone@gmail.com'
//         }

        
// const luis = {
//     name: 'Luis',
//     surname: 'Castro',
//     yob: 1993,
//     nickname: 'Pooh',
//     email: 'luis@gmail.com'
//         }

        
// const pietro = {
//     name: 'Pietro',
//     surname: 'Villino',
//     yob: 1988,
//     nickname: 'papo',
//     email: 'pietro@gmail.com'
//         }

        
// const valentina = {
//     name: 'Valentina',
//     surname: 'Cherubini',
//     yob: 2001,
//     nickname: 'dalila',
//     email: 'dallila@gmail.com'
//         }

        
// const vlad = {
//     name: 'Vlad',
//     surname: 'Invento',
//     yob: 1997,
//     nickname: 'vvaa',
//     email: 'dfdhgfgh@gmail.com'
//         }

// const davide = {
//     name: 'Davide',
//     surname: 'Consigliere',
//             yob: 1989,
//             nickname: 'dave',
//             email: 'david@gmail.com'
//               }

// const myClass = [davide, vlad, valentina, francesco, pietro, luis, simone, daniele, jing];

// for (let i = 0; i < myClass.length; i++) {  
//     const person = myClass[i];
//     const description =
//     `Nome: ${person.name} ${person.surname} (${person.nickname})
//     ETA': ${2023 - person.yob}
//     Email: ${personalbar.email}`
//     console.log(description)

    
//     console.log('NOME: ' + person.name + ' ' + person.surname + ' (' + person.nickname + ')\n'
//                 + 'ETA\': ' +(2023 -person.yob) + '\n'
//                 +'EMAIL: ' + person.email)
// }

// for (let i = 0; i < myClass.length; i++) { 
//     const element = myClass[i];
//     console.log(element.surname);   

// }


//--------------------------------------------------------------------------------
// DA ARRAY A OGGETTI E VICEVERSA

// const arielloArray = ['ariel', 'border-collie', 'maschio','bianco e nero'];

// console.log(arielloArray);

// const arielloObj = {
//     name : arielloArray[0],
//     breed: arielloArray[1],
//     gender: arielloArray[2],
//     color: arielloArray[3],
    
// }
//  console.log(arielloObj);

//  const newArilloArray = Object.values(arielloObj);

//  console.log(newArilloArray);;

//  const newKeyArray = Object.keys(arielloObj);

//  console.log(newKeyArray);


//----------------------------------------------------------------------------------
// VALUE TYPES AND REFERECE TYPES

// let pippo = 5;
// let pluto = pippo;
// pippo = 7;

// console.log(pippo);
// console.log(pluto);

// let topolino = {yob: 1930,name: 'mickey mouse'};
// let newTopolino = topolino;
// topolino.yob = 1950;

// console.log(topolino.yob);
// console.log(newTopolino.yob);


// function sum2(selectedNumber) {
//     selectedNumber = selectedNumber + 2;
// return selectedNumber;
//     }

// let paperino = 5;

// let basettoni = sum2(paperino);

// console.log(paperino);
// console.log(basettoni)


// function make2Yearsolder(person) {
//     person.yob = person.yob + 2;
//     return person;
    
// }

// let andrea = {name: 'Andrea', yob: 1978 }

// let olderAndrea = make2Yearsolder(andrea);

// console.log(andrea);
// console.log(olderAndrea);


// function make2YearsolderWithClone(person) {
//     // let clone = {name: person.name, yob: person.yob};
//     let clone ={...(persone)}
//     // let clone = {name: person.name, yob: person.yob};
//     clone.yob = clone.yob +2;
//     return clone;
    
// }

// let simone = {name: 'simone', yob: 2003};
// let olderSimone = make2YearsolderWithClone(simone);

// console.log(simone);
// console.log(olderSimone);

//-----------------------------------------------------------------------
//DESTRUTTURARE

// const libro = {
//       titolo: 'la divina commedia',
//       autore: 'dante alighieri',
//       anno: 2019,
//       paese: 'italia',
//       casaEditrice: 'einaudi'
// }
// //  const titolo = libro.titolo;
// //  const autore = libro.autore;

// const {titolo,autore} = libro

//  console.log(titolo,autore);


 //---------------------------------------------------------------------
//JSON
// const libro = {
//       titolo: 'la divina commedia',
//       autore: 'dante alighieri',
//       anno: 2019,
//       paese: 'italia',
//       casaEditrice: 'einaudi'
// }

// const libroStringa = JSON.stringify(libro)

// console.log(libro);
// console.log(libroStringa);

// const libroInStringa2 = '{"titolo":"iliade","autore":"omero","anno":2020,"paese":"italia","casaEditrice":"giunti"}';
// const libro2 = JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);

//-------------------------------------------------------------------
// FILTER
//1) scrivere una funzione che dato un array di numeri restituisce un array i numeri maggiori o uguali di 0

// const numbers = [100, -23, 0, -234, 1001, 1,34, -12];

// function filterNegative(array) {
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }return tempArray;
// }

// console.log(filterNegative(numbers))// [100, 0, 1001, 1, 34]


//MAP
//2) scrivere una funzione che dato un array di numeri li moltiplica tutti per due


// const numbers = [100, -23, 0, -234, 1001, 1,34, -12];

// function multiplyAllElementsBy2(array) {
//   const tempArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const risultato = element*2;
//     tempArray.push(risultato);
    
//   }
//   return tempArray;
// }
// console.log(multiplyAllElementsBy2(numbers))//[ 200, -46, 0, -468, 2002, 2, 68, -24 ]


//REDUCE
//3) creae una funzione che somma tutti gli elementi di un array di numeri

// const numbers = [100, -23, 0, -234, 1001, 1,34, -12];

// function sumAllElements(array) {
// let tempNumber = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     tempNumber = tempNumber+element;
// }
//     return tempNumber;
// }

// console.log(sumAllElements(numbers)); //867
//--------------------------------------------------------------------
//ESERCIZIO

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

// const pluto= ['casa', 'armadio', 'gatto', 'perfetto', 'mano']//0123(4)
// function printShorterThan5Chars(arrayOfStrings) {

//     for (let i = 0; i < arrayOfStrings.length; i++) {
//       const element = arrayOfStrings[i];
//         if (element.length < 5) {
//             console.log(element);
//         }
//         }

//        }


// printShorterThan5Chars(pluto)
// //casa
//mano



//3) scrivere una funzione che prende come parametro una stringa e 
//   restituisce una stringa composta dai primi 5 caratteri convertiti in maiuscolo


// function pickFirst5CharsAndMakeUpperCase(text) {

//     let resultText = '';

//     for (let i = 0; i < text.length; i++) {
//         if (i < 5) {
//             const char = text[i]
//             resultText += char;
//         }
//     }
//     return resultText.toUpperCase();
    

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


// solution2
// function lengthOfTextWithoutSpaces(text) {
//     const textWithoutSpaces = text.replaceAll(' ','');
//     return textWithoutSpaces.length;
//  }
//  console.log(lengthOfTextWithoutSpaces('il nano enorme'))


//5)scrivere una funzione che prende come parametro una stringa e
// restituisce il numero degli spazi


// function countSpaces(text) {
//     count = 0;
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         if (element === ' ') {
//             count++;
//         }
//     }return count
// }

// console.log(countSpaces('il nano enorme')) //2



///--------------------------------------------------------------------------------------------------
//ESERCIZI 27/03

//1) scrivere una funzione che prende in input un array di numeri è restituisce un array di stringhe in logica FizzBuzz (map)

// const numbers = [3, 5, 15, 8, 12, 2];

// function convertArrayInFizzBuzz(array){

//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 3 === 0 && element % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (element % 3 === 0){
//             console.log('Fizz');
//         } else if (element % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(element);
//         }
   
//     }
//     return tempArray;
// }


// console.log(convertArrayInFizzBuzz(numbers)) //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']

//2) scrivere una funzione che prende in input un array di numeri è restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa (map)

// const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

// function invertElements(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const risultato = element*-1;
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }


// console.log(invertElements(numbers1)) //[3, -5, -15, 8, -12, -2, 0]

//3) scrivere una funzione che prende in input un array di stringhe è restituisce un array di numeri con la lunghezza delle stringhe (map)

// const strings = ['pippo', 'pluto', 'qui'];

// function lengthOfElements(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const risultato = element.length;
//         tempArray.push(risultato);
//     }
//     return tempArray;
// }

// console.log(lengthOfElements(strings)) //[4, 5, 3]


//4) scrivere una funzione che prende in input un array di stringhe è restituisce solo quelle che contengono la lettera z (filter)

// const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

// function onlyElementsWithZ(array){
//     const tempArray = [];
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (z[Symbol.match]){
//                 tempArray.push(element);
//             }
//         } 
//         return tempArray;
//     }


// console.log(onlyElementsWithZ(strings2)) //['zapotec']

//5) scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

// const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

// function onlyEven(array){
//     const tempArray = [];
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (element % 2 === 0){
//                 tempArray.push(element);
//             }
//         } 
//         return tempArray;
// }

// console.log(onlyEven(numbers2)) //[8, -12, -2, 0]

//6) scrivere una funzione che prende in input un array di stringhe restituisce una stringa composta dalle iniziali
//(reduce)
const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array){
    let tempArray = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tempArray = tempArray+element;
    }
    return tempArray;
}

console.log(sumFirstChar(strings3)) //'pop'

//7) scrivere una funzione che prende in input un array di numeri e restituisce il maggiore

// const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

// function maxElement(array){
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (a>b) {
        
//     }
    
// }
// }

// console.log(maxElement(numbers3)) //15