let lastisfirst=false;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a string: ', word => {
    if(word.charAt(0) == word.charAt(word.length-1)){
        lastisfirst = true;
    }
    console.log(`last character == first character = ${lastisfirst}`)
    readline.close();
});