// Array biasa
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (let buah of fruits) {
//     console.log(`buah ${fruits}`);
// }

// Nested Array
let studentRow = [
    ['budi', 'asep', 'ucup'],
    ['caca', 'cici', 'cucu'],
    ['dede', 'dedi', 'dedu']
]

for( let row of studentRow) {
    for (let student of row){  
        console.log(student)
    }
}