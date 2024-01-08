const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a number: ', num => {
    let loop = true;
    let palindrome = true;
    while(loop){
        for(let currIndex = 0;currIndex<num.length/2;currIndex++){
            if(!(num.charAt(currIndex)==num.charAt(num.length - currIndex - 1))){
                palindrome = false
                loop = false;
            }
        }
        loop = false;
    }
    switch(palindrome){
        case true:
            console.log(`${num} is a palindrome.`);
            break;
        case false:
            console.log(`${num} is not a palindrome.`);
            break;
        default:
            break;
    }
    readline.close();
});