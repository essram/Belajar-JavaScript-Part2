const user = {
    name : "John",
    email : "j@j.com",
};

const {name : nama, email, phone = '0812341321'} = user;
console.log(nama, email, phone);