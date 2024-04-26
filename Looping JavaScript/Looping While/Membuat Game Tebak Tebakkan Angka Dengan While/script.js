let maximum = parseInt(prompt("Enter the maximum number: "));
while(!maximum){
    maximum = parseInt(prompt("Enter the maximum number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    attempts++;
    if(guess > targetNum){
        guess = parseInt(prompt("to far"));
} else {
    guess = parseInt(prompt("to bottom"));
}
}

alert(`Congrats! You got it! It was, dengan percobaan ${attempts} kali`);