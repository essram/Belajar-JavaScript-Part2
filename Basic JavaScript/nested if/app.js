// EPS CEK KONDISI BERLAPIS

const passowrd = prompt("masukkan password");

//password harus sepanjang 6 karakter
if (passowrd.length >= 6) {
  if (passowrd.indexOf(" ") == -1) {
    console.log("Password Valid");
  } else {
    console.log("Password tidak boleh ada spasi");
  }
} else {
  console.log("Password Minimal 6 Karakter");
}
