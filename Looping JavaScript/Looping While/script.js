// While akan terus berjalan selama kondisi tesnya berniali true

let num = 0;
while (num <= 10){
    console.log(num);
    num++;
}

const password = '1234';

let guess = prompt('enter password');
while (guess !== password){
    guess = prompt('enter password');
}

alert('password correct');