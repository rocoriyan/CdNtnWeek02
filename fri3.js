//i dont think this works

const coffeeShop={
    branch: "branch name",
    drinks: [ //this is a 2d array, with ids on the left, names in the middle and prices on the right. its kind of like a spreadsheet in a way.
        [0,"Black Coffee", 0.00],
        [1,"White Coffee", 1.11],
        [2,"Red Coffee", 1.00],
        [3,"Green Coffee", 0.10],
        [4,"Blue Coffee", 0.01]
    ],
    food: [
        [5,"Crepe with chocolate spread", 4.00],
        [6,"Crepe with cheese spread", 3.49],
        [7,"Crepe with money spread", 99.00],
        [8,"Crepe with spreadsheet", 8.99],
    ],
    drinksOrdered(order){
        let price = 0;
        let orderNames = [];
        order.forEach(element => {
            price += self.drinks[element[0]][2];
            orderNames.push(self.drinks[element[0]][1]);
        });
        let loopNum = 1;
        console.log("You ordered:");
        //console.log orders;
        orderNames.forEach(element => {
            console.log(`${loopNum}. ${orderName[loopNum-1]}`);
        });
        console.log(`Total: ${price}`);
    },
    foodOrdered(order){
        let price = 0;
        let orderNames = [];
        order.forEach(element => {
            price += element[2];
            orderNames.push(element[1]);
        });
        let loopNum = 1;
        console.log("You ordered:");
        //console.log orders;
        orderNames.forEach(element => {
            console.log(`${loopNum}. ${orderName[loopNum-1]}`);
        });
        console.log(`Total: ${price}`);
    }
};

let foodOrder= [0, 2, 2, 2];
coffeeShop.drinksOrdered(foodOrder);