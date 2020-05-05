## Create an array out of a string

Please add the missing code. Also please add comments that explain the steps.
Hint: `ages.map()`

```
function addAge(age){
  return age += 5;
}
function iterateArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = [];
  ...
  console.log(newAges);
}

// init function
iterateArray();
```

Hint: `ages.filter()`

```
function checkAge(age){
  return age > 21;
}
function checkArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = [];
  ...
  console.log(newAges);
}

// init function
checkArray();
```

Hint: `ages.reduce()`

```
function add(runningTotal, age){
  return runningTotal + age;
}
function addArray(){
  var ages = [4, 12, 23, 45, 87];
  var newAges = [];
  ...
  console.log(newAges);
}

// init function
addArray();
```



## Bonus

What is the difference between map() and filter() and reduce()?
