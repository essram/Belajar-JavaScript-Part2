// Set Timeout
// console.log("Hai");
// setTimeout(() => {
//     console.log("WOY");
// } , 3000) //parameter kedua sebagai waktu kapan akan dijalankan (berapa dateik setelah kalimat pertama muncul)

// Set Interval
// Proses berulang setiap waktu yang ditentukan

const interval = setInterval(() => {
    console.log('p');      // P akan ditampilkan setiap 1 detik
}, 1000)

// cara menghentikan interval
// namaMethod(namaVariabel)
clearInterval(interval)

