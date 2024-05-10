// Functionn Expression

// const hasil = function perpangkatan (x){
//     return x*x;
// }

// console.log(hasil(5))

// Arrow Function
// const perpangkatan = (x) => {      // Kalau parameternya satu boleh tanpa menggunakan tutup kurung = const perpangkatan = x =>
//   return x * x;
// };

// console.log(perpangkatan(5));

// Implisit Return
// Tidak menuliskan return dan menggunakan () dan tidak menggunakan tidak koma di dalamnya
// Digunakan jika hanya ada satu baris perintah
const perpangkatan = (x) => x * x;

console.log(perpangkatan(5));

// function pendek
const add = (x, y) => x + y;
console.log(add(5, 5));