// Operator AND && kebalikan dari OR
// const password = prompt("masukkan password");

// if(password.length >= 6 && password.indexOf(" ") == -1){
//     console.log("Password Valid")
// } else{
//     console.log("Password tidak memenuhi syarat")
// }

// Operator OR || salah satunya true program akan jalan

const role = prompt("masukkan role akun");
if (role === "admin" || role === "spv") {
  console.log("Anda bisa mengaksesnya");
} else {
  console.log("Anda tidak bisa mengaksesnya");
}

//Operator NOT ! nilai yang berkebalikan
// const role = prompt("masukkan role akun");

// if (role !== 'admin'){
//     console.log("Anda tidak bisa mengaksesnya")
// } else {
//     console.log("Anda bisa mengaksesnya")
// }
