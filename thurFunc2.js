let orderCount=0;

const takeOrder = (topping, side) => {
    console.log(`Pizza with ${topping} and a side of ${side}`);
    orderCount++;
    console.log(`Current orders: ${orderCount}`);
}
takeOrder("pineapple", "fries");