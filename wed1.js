const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('How old are you? ', age => {
    if(age<18){
        console.log("You aren't old enough.");
    }
    else{
        console.log("Yes I can serve you.");
    }
    readline.close();
});