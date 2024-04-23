// Contoh 1

// let str = 'lol';
// for (let i = 0; i <= 4; i++){
//     console.log('Outer :', i);
//     for (let j = 0; j < str.length; j++){
//         console.log(' Inner: ', str[j]);
//     }
// }


// Contoh 2

const huruf = 'abcd';
for (let i = 1; i <= 10; i++){
    console.log(`${i}. Soal nomor ${i} :`);
    for (let j = 0; j < huruf.length; j++){
        console.log(`   ${huruf[j]}. Pilihan Jawaban`);
    }
}
