// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//   console.log(element);
// }

// angka.forEach(print); // parameter berupa function

// angka.forEach(function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

const animes = [
  {
    title: "AOT",
    rating: 90,
  },
  {
    title: "WANPIS",
    rating: 95,
  },
  {
    title: "GNH",
    rating: 99,
  },
  {
    title: "Haikyu",
    rating: 98,
  },
];

animes.forEach(function (anime) {
    console.log(`${anime.title} - ${anime.rating}/100`);
})
