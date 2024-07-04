// Loops
let name = "Dave";
let counter = 0;
let myLetter;
while (counter <=3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter +=2;
        continue;
    }
    if (myLetter === "v") break;
    counter++; // counter += 1
}
console.log(counter);


let count = 10
console.log(count)
console.log(count++) //post increment
console.log(++count) //pre increment

let count = 10
let a = count++ // count++ as argument of expression //a=10
let count = 10
let b = ++count //b=11

let count = 10, c = 3
let a = count++ + c // a = 13
let b = ++count + c // b = 15 because we have incremented count
let count = 10, c = 3
let b = ++count + c // b = 14

do {} while (counter <= 1);

while (counter <= 1); //forever loop
while (counter-- <= 1); //
while (counter-- <= 1, expression); //ask Luca

