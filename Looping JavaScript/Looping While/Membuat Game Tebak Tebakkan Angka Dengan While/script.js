let maximum = parseInt(prompt("Enter the maximum number: "));
while(!maximum){
    maximum = parseInt(prompt("Enter the maximum number: "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess: "));

while(guess !== targetNum){
    if(guess === targetNum){
        guess = prompt("to far");
} else {
    guess = prompt("to bottom");
}
}

alert(`Congrats! You got it! It was ${targetNum}.`);