## Manipulate Arrays

Please add the missing code. Also please add comments that explain the steps.
Hint: `.push(), .pop()`

```
function expandArray(){
  var arr1 = ['dog', 'cat']
  
  // [ ADD CODE ]
  
  // show result
  console.log(arr1);
}

// init function
expandArray();

// output
Array(3) [ "dog", "cat", "horse"]
```

```
function reduceArray(){
  var arr1 = ['dog', 'cat', 'horse'];
  
  // [ ADD CODE ]
  
  // show result
  console.log(arr1);
}

// init function
reduceArray();

// output
Array(3) [ "dog", "cat"]
```


## Bonus
1. How do I merge 2 arrays?
2. Can I add items to an Object with `.push()`?
e.g
```
function expandArray(){
  var obj1 = {
    'dog': cute',
    'cat': 'smart'
  }
  
 // output
 {
    'dog': cute',
    'cat': 'smart',
    'horse': 'fast'
  }
}
```
  - What happens when we do this?
  - How can we prevent the change?
