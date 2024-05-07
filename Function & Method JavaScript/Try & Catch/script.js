// jika ada kesalahan proses maka tidak akan merusak programnya
// try {
//  saya.kenalan()
// } catch {
//  console.log("Error")
// }

function teriak (msg){
    try{
        console.log("Halo " + msg.toUpperCase() + " !");
    } catch(eror) {
        console.log("Error")
        console.log("Masukan dalam bentuk string")
    }
}