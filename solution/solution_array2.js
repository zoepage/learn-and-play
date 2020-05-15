// ## Create an array out of a string

// Please add the missing code. Also please add comments that explain the steps.

// Hint: `ages.map()`

function addAge(age){
  return age += 5;
}

function iterateArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = ages.map(addAge);
  console.log(newAges);

  return newAges;

}

iterateArray();

// Hint: `ages.filter()`

function checkAge(age){
  return age > 21;
}
function checkArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = ages.filter(checkAge);
  console.log(newAges);

  return newAges;
}

checkArray();

// Hint: `ages.reduce()`

function add(runningTotal, age){
  return runningTotal + age;
}
function addArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = ages.reduce(add);
  console.log(newAges);

  return newAges;
}

addArray();


// ## Bonus

// What is the difference between map() and filter() and reduce()?

// map() goes through every element in the array and generates a new array with modified elements.

// filter() goes through every element in the array and returns a filtered array (without elements that don't match the filter).

// reduce() takes all the elements in the array an generates one single value from them.

