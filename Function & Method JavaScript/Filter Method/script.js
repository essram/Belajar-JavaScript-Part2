// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// console.log(angkaGanjil);

const animes = [
  {
    title: "Naruto",
    rating: 95,
    year: 2002,
  },
  {
    title: "Dragon Ball",
    rating: 90,
    year: 1996,
  },
  {
    title: "One Piece",
    rating: 100,
    year: 1999,
  },
  {
    title: "Jujutsu Kaisen",
    rating: 80,
    year: 2020,
  },
];

const animeBagus = animes.filter((anime) => anime.rating >= 90);
const judulAnimeBagus = animeBagus.map((anime) => anime.title);
const animeCukupBagus = animes.filter((anime) => anime.rating >= 70);
const animeBaru = animes.filter((anime) => anime.year >= 2000);
console.log("anime bagus : ", animeBagus);
console.log("judulnya : ", judulAnimeBagus);
console.log("anime bagus : ", animeCukupBagus);
console.log("anime baru : ", animeBaru);
