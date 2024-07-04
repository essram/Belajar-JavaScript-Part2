// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el, 0);
// };

//contoh lain

const nama = ['asep', 'joko', 'budi', 'wati', 'jono', 'siti'];

const peringkat = (gold, silver, bronze, ...sisa) => {
    console.log(`Peringkat Gold : ${gold}`);
    console.log(`Peringkat Silver : ${silver}`);
    console.log(`Peringkat bronze : ${bronze}`);
    console.log(`Peringkat sisa : ${sisa}`);
};