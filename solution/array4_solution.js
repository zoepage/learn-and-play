// ## Manipulate Arrays

// Please add the missing code. Also please add comments that explain the steps.
// Hint: `.push(), .pop()`

function expandArray(){
  var arr1 = ['dog', 'cat']
  arr1.push('horse');
  // show result
  console.log(arr1);
  return arr1;
}

// init function
expandArray();
// output
// Array(3) [ "dog", "cat", "horse"]

function reduceArray(){
  var arr1 = ['dog', 'cat', 'horse'];
  arr1.pop();
  // show result
  console.log(arr1);
  return arr1;
}

// init function
reduceArray();
// output
// Array(3) [ "dog", "cat"]



// ## Bonus
// 1. How do I merge 2 arrays?
// We can use .concat() to merge two arrays:
var colors = ['blue', 'red', 'green'];
var numbers = [2, 4, 6];

var mergeTwoArrays = colors.concat(numbers);
console.log(mergeTwoArrays);
// Output: ['blue', 'red', 'green', 2, 4, 6]

// 2. Can I add items to an Object with `.push()`?
// We can use .push() only to add an new element to an array of objects.

var selection = [{
    color: 'red',
    orderNumber: 23471,
    city: 'Berlin'
}];

selection.push([{
 address : 'Stralauer Allee'
}]);

console.log(selection);

//   - What happens when we do this?
// It adds a new object in the array and doesn't add to the existng one in the array.
//   - How can we prevent the change?
// To add a new element to an object we can use dot notation.
var selection = {
    color: 'red',
    orderNumber: 23471,
    city: 'Berlin'
};

selection.address = 'Stralauer Allee';

console.log(selection);
