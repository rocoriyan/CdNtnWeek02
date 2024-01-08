let placeOfWork = "ComputerCorp"
let townOfHome = "123 Mai-Hous Street";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Pick a time from 0-23, where \'0\' is 12AM and \'23\' is 11PM: ', time => {
    if(time<10 || time>20){
        console.log(`I'm at my home, ${townOfHome}`);
    }
    else if(time<11){
        console.log(`I'm commuting to my workplace. ${placeOfWork}`);
    }
    else if(time>19){
        console.log(`I'm on my way home from work`);
    }
    else{
        console.log(`I'm at my workplace, ${placeOfWork}`);
    }
    readline.close();
});