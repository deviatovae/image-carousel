// Задача
// Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.

let num = 1042;

// let digits = num
//     .toString()
//     .split('')
//     .filter((digit) => parseInt(digit) % 2 === 0)
//     .reduce((sum, digit) => sum + parseInt(digit), 0)digit

let sum = 0

while (num > 0) {
    let ostatok = num % 10

    if (ostatok % 2 === 0) {
        sum = sum + ostatok
    }
    num = Math.trunc(num / 10);
    
}


// 10245 / 10 = 1024.5
// 1024 / 10 = 102.4
// 102 / 10 = 10.2
// 10 / 10 = 1.0
// 1 / 10 = 0.1
// 0

// 10245 % 10 = 5
// 1024 % 10 = 4
// 102 % 10 = 2
// 10 % 10 = 0
// 1 % 10 = 1

console.log(sum)