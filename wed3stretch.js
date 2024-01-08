const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a number: ', num => {
    if (num % 3 == 0 || num % 5 == 0){
        console.log("This number is divisible by 3 or 5.");
    }
    else{
        console.log("This number is not divisible by 3 or 5.");
    }
    readline.close();
});