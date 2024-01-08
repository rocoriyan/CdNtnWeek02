const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Name a pizza topping: ', topping => {
    switch(topping){
        case "corn":
        case "pineapple":
            console.log(`${topping} should not be on a pizza.`);
            break;
        case "pepperoni":
            console.log(`${topping} is an important ingredient for my pizza`);
            break;
        case "peppers":
        case "mushrooms":
            console.log(`I don't mind having ${topping} on my pizza`);
            break;
        default:
            console.log(`I've never thought about ${topping} as a topping before, so I'm not sure how I feel about it`)
            break;
    }
    readline.close();
});