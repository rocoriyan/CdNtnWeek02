const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a password: ', password => {
    if(password.length < 8){
        console.log("Your password is too short.")
    }
    else{
        console.log(password);
    }
    readline.close();
});