'use strict';

// 1. 

function sum(...n) {
    let sumValue = 0;
    for (let item of n) {
        sumValue += item;
    }
    return sumValue;
}

let resultSum = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
console.log(resultSum);




//  2.

function sum(...numbers) {
    let sumValue2 = 0;
    for (let i of numbers) {
        sumValue2 += i
    }
    return sumValue2
}

let resultSum2 = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(resultSum2);



// 3.
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

// let result = `${user.firstname} ${user.lastname}`;
// console.log(result);















//   6.
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

for (let item of array) {
    if (item.length > 4 && item.includes('av')) {
        console.log(item);
    }
}
// --------------------------------------------- //
array.forEach(function (i) {
    {
        if (i.length > 4 && i.includes('av')) {
            console.log(i);
        }
    }
})



// 7.
let array2 = [1,2,3,4,5];
array2.reverse();
console.log(array2);


// 8.
function userAge(number) {
    if (number < 18) {
        return 'arasrulwlovani';
    }else if (number => 18) {
       
        return 'srulwlovani';
    } 
        return 'error';
}

let result = userAge(20);
console.log(result);