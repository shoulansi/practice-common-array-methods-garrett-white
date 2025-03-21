let orders = [
    ["Coffee", "Tea", "Orange Juice"],
    ["Donut", "Bagel", "Muffin"]
];

console.log(orders[0].length);
console.log(orders[1].length);

console.log(orders[0][1]);
console.log(orders[1][2]);

console.log(orders[0][0]);
console.log(orders[1][1]);

console.log(orders[0][2]);
console.log(orders[1][0]);

let row = 1
let item = 2
console.log(orders[row][item]);

for(let i = 0; i < orders[0].length; i++) {
    console.log(orders[0][i]);
}

orders[0].push("Flat White");
console.log(orders[0].length);