'use strict';

// 1. 

function SummPositive( numbers ) {
    let negatives = [];
    let sum = 0;
  
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0) {
        negatives.push(numbers[i]);
      }else{
        sum += numbers[i];
      }
    }
  
    console.log(negatives);
  
    return sum;
  }
  
  let sum_result = SummPositive( [ 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8 ] );
  
  console.log(sum_result);






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
let user4 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

let result4 = 
  user4.isloggedin == true
  ? "giorgi saakadze"
  : user4.isloggedin == false
  ? "paatas tavi"
  : "error";

  console.log(result4);

// let result1 = `${user.firstname} ${user.lastname}`;
// console.log(result1);



// 4.
function getMaxOfArray(numArray) {
    return Math.max.apply(numArray);
  }

let resultFunction2 = getMaxOfArray();
console.log(resultFunction2);



Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };






// 5.
function test(number) {
    if (number % 2 == 0) {
        return 'luwi';
    }else if (number % 2 == 1) {
        
        return 'kenti';
    } 
        return 'error';
}

let result3 = test(4);
console.log(result3);







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