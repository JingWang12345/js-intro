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

// function moltiplichi (numero ){ 
//    if (numero >= 0 ) {
//     const risultato = numero * 2;
//     return risultato;
//  }  
//    }console.log(moltiplichi(3))




// 2) scrivere una funzione che dato un stringa restituisca la sua versione maiuscola

// function textMaiuscola(text) {
//     const risultato = text.toUpperCase();
//     return risultato;
//     }
// console.log(textMaiuscola("text"))
// 3) scrivere una funzione che dato un stringa mi restituisca vero se è più lunga di 10 caratteri altrimenti restituisca falso
//  let risultato = "";
function stringa(caratteri) {
    if (caratteri.length > 10) {
     
        return "vero";
    } else {
      
        return "falso";
    }

} console.log(stringa("ciaociaociaociao"));
// 4) scrivere una funzione pura che restituisca la scacchiera
function skacchiera(i){
    let scacchiera= '';
for (let y = 0; y < 16 ; y++) {
    for (let x = 0; x < 16; x++) {
        if (y % 2 === 0){
            if (x % 2 === 0) {
                scacchiera+='#';
            } else {
                scacchiera+=' ';
            }
        } else {
            if (x % 2 === 0){
                scacchiera+=' ';
            } else{
                scacchiera+='#';
            }
        }
        
    }scacchiera+='\n';
}
return scacchiera;
}console.log(skacchiera(1));
// 5) scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz


// 6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale


