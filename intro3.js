//scope

// const pippo = 'ciao';

// if (true) {
//     console.log(pippo);
//     const pluto = 'javascript'
//     if (true) {
//         console.log(pluto);
//         const paperino = 'pizza';
//     }
//console.log(paperino); non è possibile leggere la variabile di uno scope interno

// }


// const pippo = 'pippo'; non è possibile leggere la variabile con lo stesso nome nello stesso scope

// for (let i = 0; i < 3; i++) {
//     console.log('ciao');

// }

// for (let i = 0; i < 3; i++) {
//     console.log('mondo');

// }


// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 10; i++) {
//         console.log(i); //shadowed variable
//     }

// }


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i);
//         console.log(j);

//     }
// }

//------------------------------------------------------
//Funzioni


// function elevaAlQuadrato(numero){  ///viva normalita
//     const risultato = numero * numero;
//     return risultato;
// }

// const dueAlQuadrato = elevaAlQuadrato(2);

// console.log(dueAlQuadrato);


// const cinqueAlQuadrato = elevaAlQuadrato(5);

// console.log(cinqueAlQuadrato);

// console.log(elevaAlQuadrato(50));


// const elevaAlQuadrato2 = function(numero){ //funzione anonima
//     const risultato = numero * numero;
//     return risultato;
// }

// console.log(elevaAlQuadrato2(3));

// const elevaAlQuadrato3 = (numero) => numero * numero; // funzione lambda

// const elevaAlQuadrato3 = (numero) => {
//     const risultato = numero * numero;
//     return risultato;
// }

// console.log(elevaAlQuadrato3(12));


// function elevazioneAPotenza(base, esponente) {
//     const risultato = base**esponente;
//     return risultato;
// }

// console.log(elevazioneAPotenza(3, 4));

//-------------------------------------------------------
// funzioni pure e impure

// function scriviNellaConsole(messaggio) {  // funzione impura
//     console.log(messaggio);
//     /// return undefined;
// }

// function sommaUno(numero) {  // funzione pura
//     return numero + 1;
// }


// function namsommaDueELogga(numero) {

// }



// scriviNellaConsole('scemo chi legge')
///const pippo = scriviNellaConsole('scemo chi legge')
///console.log(pippo);



// function log(messaggio) {
//     console.log(messaggio);

// }

// function sommaDue(numero) {
//     const risultato = numero + 2;
//     return risultato;

// }

// log(sommaDue(5));

//--------------------------------------------------------------------

//esercizi
// 1) scrivere una funzione che dato un numero se è positivo lo moltiplichi per due 


function multiplyBy2(number) {
    if (number >= 0) {
        return number * 2;
    }
    return number;
}

const multiplyBy2Lambda = (number) => {
    if (number >= 0) {
        return number * 2;
    }
    return number;
}

console.log(multiplyBy2(3));
console.log(multiplyBy2(-3));
console.log(multiplyBy2(0));
console.log(multiplyBy2(300));

console.log(multiplyBy2Lambda(20));
console.log(multiplyBy2Lambda(-300));


// 2) scrivere una funzione che dato un stringa restituisca la sua versione maiuscola


function textToUpperCase(text) {
    return text.toUpperCase();
}

const textToUpperCaseLambda = (text) => text.toUpperCase();

console.log(textToUpperCase('ciao'));
console.log(textToUpperCase('pippo'));
console.log(textToUpperCaseLambda('ciao ciao'));
console.log(textToUpperCaseLambda('Jing'));

// 3) scrivere una funzione che dato un stringa mi restituisca vero se è più lunga di 10 caratteri altrimenti restituisca falso

function isMoreThan10Char(text) {
    if (text.length > 10) {
        return true;
    } else {
        return false;
    }
}

const isMoreThan10ChanLambda = (text) => {
    if (text.length > 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isMoreThan10Char('la casa rosa vicino al fiume'));
console.log(isMoreThan10Char('focaccia'));
console.log(isMoreThan10Char('la mamma è cattiva'));
console.log(isMoreThan10Char('pulcino'));


// 4) scrivere una funzione pura che restituisca la scacchiera

function buildChessBoardWithHashtag(size) {
    let scacchiera = '';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    scacchiera += '#';
                } else {
                    scacchiera += ' ';
                }
            } else {
                if (x % 2 === 0) {
                    scacchiera += ' ';
                } else {
                    scacchiera += '#';
                }
            }

        } scacchiera += '\n';
    }
    return scacchiera;
}

const buildChessBoardWithHashtagLambda = (size) => {
    let scacchiera = '';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (y % 2 === 0) {
                if (x % 2 === 0) {
                    scacchiera += '#';
                } else {
                    scacchiera += ' ';
                }
            } else {
                if (x % 2 === 0) {
                    scacchiera += ' ';
                } else {
                    scacchiera += '#';
                }
            }

        } scacchiera += '\n';
    }
    return scacchiera;
}


console.log(buildChessBoardWithHashtag(3));
console.log(buildChessBoardWithHashtag(13));
console.log(buildChessBoardWithHashtag(30));
//5) scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz

function transformNumberInFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FIzzBuzz";
    } else if (number % 5 === 0){
        return "Buzz";
    } else if (number % 3 === 0){
        return "FIzz";
    } else {
        return number;
    }
}

const transformNumberInFizzBuzzLambda = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FIzzBuzz";
    } else if (number % 5 === 0){
        return "Buzz";
    } else if (number % 3 === 0){
        return "FIzz";
    } else {
        return number;
    }
}


console.log(transformNumberInFizzBuzz(3));
console.log(transformNumberInFizzBuzz(10));
console.log(transformNumberInFizzBuzz(15));
console.log(transformNumberInFizzBuzz(8));

// 6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale

function onlyOddChars(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 !== 0) {
            result += text[i];
        }
    }
    return result;
}

const onlyOddCharsLambda = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 !== 0) {
            result += text[i];
        }
    }
    return result;
}  



console.log(onlyOddChars('Jing')) // ig
console.log(onlyOddChars('Andrea')) // nra
console.log(onlyOddChars('raviolo')) // ail
                        //0123456

console.log(onlyOddChars('Jing è brava in informatica'))


//--------------------------------------------------
function min(number1, number2) {
    if (number1>number2) {
        return number2;
    } else {
        return number1;
    }
}

const minLambda = (number1, number2) => {
    if (number1>number2) {
        return number2;
    } else {
        return number1;
    } 
}

console.log(min(0, 10));
console.log(min(0, -10));


//---------------------------------------------------

function convertToPositive(number) {
    if (number>=0) {
        return number;
    } else {
        return number*-1;
    }
}



console.log(convertToPositive(10)) //10
console.log(convertToPositive(-20)) //20



// for (let i = 0; i < 20; i+=2) {
//     console.log(i);
// }


function printOddUntilTerm(start, term) {
    if (start>term) {
        return;
    } else {
        console.log(start);
        printOddUntilTerm(start+2,term);
    }
}

printOddUntilTerm(0, 20);