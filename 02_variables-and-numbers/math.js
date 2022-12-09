// exercise 1

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

let width = Math.abs(x1 - x2);
let length = Math.abs(y1 - y2);
let square = width * length;

console.log(square);

// exercise 2

let a = 13.123456789;
let b = 2.123;
let n = 5;

function findFloat(number) {
    let intNumber = Math.trunc(number);
    let floatNumber = number - intNumber;

    return String(floatNumber).slice(2, n-(-2));
}

if (findFloat(a) < findFloat(b)) {
    console.log(`Дробная часть a (${findFloat(a)}) меньше, чем дробная часть b (${findFloat(b)})`);
} else if (findFloat(a) > findFloat(b)) {
    console.log(`Дробная часть a (${findFloat(a)}) больше, чем дробная часть b (${findFloat(b)})`);
} else {
    console.log(`Дробные части a (${findFloat(a)}) и b (${findFloat(b)}) равны`);
}

// exercise 3

// let l = 0;
// let m = 100;
//
// function numberOddNumber() {
//     let range = Math.abs(m - l);
//     let numberInRandom = 0;
//
//     while (numberInRandom % 2 === 0) {
//         let numberInRandom = Math.round(Math.random() * range);
//         if (numberInRandom % 2 !== 0) {
//             console.log(numberInRandom);
//             break;
//         }
//     }
// }
//
// numberOddNumber();

// exercise 3 (without a cycle)

let l = 0;
let m = 100;

let range = Math.abs(m - l);
let numberInRange = Math.round(Math.random() * range);

if (numberInRange % 2 === 0) {
    console.log(numberInRange - 1);
} else {
    console.log(numberInRange);
}
