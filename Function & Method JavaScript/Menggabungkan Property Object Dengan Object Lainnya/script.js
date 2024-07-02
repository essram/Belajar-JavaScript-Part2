const user = {
    name : 'John',
    email : 'john@gmail.com'
}

const credential = {
    password : 'password',
    token : 'iulkfysr786fsr'
}
const User = {...user, ...credential};
console.log(User);
