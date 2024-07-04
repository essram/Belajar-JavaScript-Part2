const nama = ['asep', 'joko', 'budi', 'wati', 'jono', 'siti'];

const [gold, silver, bronze, ...peserta] = nama;
console.log(gold, silver, bronze, ...peserta);