let balance = 5;
let truePin = 1234;

let pinInput = 1234;
let withdrawalRequest = 99999999;

//console.log(`Balance:${balance}\nPin:${truePin}\nPin attempt:${pinInput}\nRequested withdrawal amount:${withdrawalRequest}`); //testing code

const cashMachine = (pin, withdrawal) => {
    if(pin === truePin && withdrawal <= balance){
        console.log("Welcome to your account!");
    }
    else if(pin != truePin){
        console.log("Incorrect pin");
    }
    else{
        console.log("Insufficient funds");
    }
}

cashMachine(pinInput, withdrawalRequest);