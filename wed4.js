const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a number: ', num => {
    if(num%3==0 && num%5==0){
        console.log("fizz buzz");
    }
    else if (num%3==0){
        console.log("fizz");
    }
    else if (num%5==0){
        console.log("buzz");
    }
    readline.close();
});