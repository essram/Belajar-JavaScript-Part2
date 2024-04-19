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

// Mengganti value key
orang.nama = 'ram';
orang.umur = 16;
orang.alamat = 'Sidorajo';
orang.gender = "Laki-laki";


// Cara memanggil object
//console.log(orang[("nama")]); key harus ditulis sesuai dengan value tipe data yang ada

console.log(orang);
console.log("Status : " + barang["is" + "Ready"]);
console.log("Lokasi : " + barang.location.indonesia);
console.log("Size : " + barang.size[3]);
