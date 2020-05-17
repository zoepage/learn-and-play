function twoDArray(){
    // add code
    var numbers = [
      [2, 4],
      [6, 8],
      [10, 12]
    ];
    return numbers;
  }

var getNumbers = twoDArray();
  
//Output:
console.log(getNumbers[2][0]);



// ## Bonus
// 1. Write a function that logs the full output.
// //Output:
// [[2, 4],[6, 8],[10, 12]]

function logFullArray(){
    // add code
    var numbers = [
      [2, 4],
      [6, 8],
      [10, 12]
    ];
    return numbers;
  }
logFullArray();
  
//Output:
console.log(logFullArray());


// 2. Write a function that adds both values in the deeper array and reduce the array to one level.

// flatten multidimensional array to one level

function flattenArray(){
    // add code
    var numbers = [
      [2, 4],
      [6, 8],
      [10, 12]
    ];
    return numbers.flat();
  }
flattenArray();
  
//Output:
console.log(flattenArray());

// 3. What are `jagged arrays`?
// A "jagged array" is an array which elements are also arrays, as in an "array of arrays". 

