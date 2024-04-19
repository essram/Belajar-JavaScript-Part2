//Cara Membuat Struktur Data Object
const orang = {
  nama: "Jug",
  umur: 20,
  alamat: "Jakarta",
};

const barang = {
  barang: "Sepatu",
  harga: 100000,
  isReady: true,
  size: ["38", "39", "40", "41", "42"],
  location: {
    indonesia: 48,
    singapore: 50,
  },
};

//console.log(orang[("nama")]); key harus ditulis sesuai dengan value tipe data yang ada

console.log("Nama Orang : " + orang.nama);
console.log("Status : " + barang["is" + "Ready"]);
console.log("Lokasi : " + barang.location.indonesia);
console.log("Size : " + barang.size[3]);
