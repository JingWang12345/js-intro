// let a = 5 
// let b = "ciao"

// function square(num) {
//     return num*num
// }

// // console.log(square(a));









// // ripetere un'operazione un certo numero di volte

// for (let i = 0; i < 10; i++) {
//   console.log(i);   
// }

// function logNumbersFrom0To9() {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);    
//     }
//     }

//     // Astraggo i dettagli dell'algoritmo all'interno di una funzione
// logNumbersFrom0To9();





// function logNumbersFrom0To9(maxNum) {
//     for (let i = 0; i < maxNum.num; i++) {
//       console.log(i);    
//     }
//     }
    
// console.log("\n");
// logNumbersFrom0To9(10)

// console.log("\n");
// logNumbersFrom0To9(20)












// function logNumber(n) {
//     console.log(n);
// }

// function logDouble(n){
//     console.log(n*2);
// }

// function logHello(n) {
//     console.log("Hello");
    
// }





// function logNumbersFrom0To9(maxNum, func) {
//     for (let i = 0; i < maxNum; i++) {
//       func(i);    
//     }
//     }


//     console.log("\n");
//     repeatFrom0To(10, logNumber)







    // chiamare la  funzione repeat

function logNumber(n) {
    console.log(n);
}

function logdivide(n){
    console.log(n % 3 === 0);
}

function repeatFrom0To(maxNum, func) { // maxNum=10, func=logdivide
    for(let i=0; i<maxNum; i++) {
        func(i) // logNumber(i)
    }
}

repeatFrom0To(15, logNumber) // ??
repeatFrom0To(15, logdivide)

// FUNZIONI ANONIME

repeatFrom0To(15, function(n){
console.log(n%3 === 0)
})

// LAMBDA / ARROW FUNCTIONS

// setInterval(function() { console.log("Text")}, 1000)
// setInterval(() => console.log("Text"), 1000);


// FUNZIONI CHE   


// ARRAY E FUNZIONI DI 


let numbers = [1,2,3]
let squaredNumbers = []

for(let n of numbers) {
    squaredNumbers.push(n*n)
}

console.log(squaredNumbers)

let doubleNumbers = []

for(let n of numbers) {
    squaredNumbers.push(n*2)
}

console.log(doubleNumbers)

function map(array, func) { // array=[1,2,3] func=n => n*n
let newarray = []
    for (let n of array) {
      newarray.push(func(n))
    }

    return newarray;// un nuovo array dove applico func su tutti gli elementi dell'array di partenza
}

squaredNumbers = map([1,2,3], n => n*n)
doubleNumbers = map([0,400,5,7,8], n => n*2)
console.log(squaredNumbers);
console.log(doubleNumbers);


let a = [ "pippo", "pluto" ]
console.log(a[1])