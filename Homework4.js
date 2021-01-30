/*Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

Solution*/

function nestedArrays(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
      newArr = newArr.concat(arr[i])
    }
    else{
      newArr = newArr.concat(nestedArrays(arr[i]))
    }
  }
  return newArr;
}
console.log(nestedArrays([1, [3, 4, [1, 2]], 10, 4]));
console.log(nestedArrays([14, [1, [[[3, []]]], 1], 0]))

/*Given a number.
Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
Repeat that process if needed and return the result.

Solution*/

function sumOfDigits(number, sum = 0){
  let str = String(number);
  for(let i = 0; i < str.length; i++){
    let lastDigit = number % 10;
    number = (number - lastDigit) / 10;
    sum += lastDigit;
  }
  if(sum > 9){
    return sumOfDigits(sum)
  }
  return sum;
}
console.log(sumOfDigits(14))
console.log(sumOfDigits(29))
console.log(sumOfDigits(999999999999))

/*Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

Solution*/

function rotateArray(array, number){
  while(number){
    let cutting = array.shift();
    array.push(cutting);
    return rotateArray(array, --number)
  }
  return array
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 2))
console.log(rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))

/*Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

Solution*/

function invert(obj){
  for(let key in obj){
    if(!obj.hasOwnProperty(obj[key])){
      obj[obj[key]] = key
    }
    else{
      if(typeof obj[obj[key]] !== 'object'){
        obj[obj[key]] = [obj[obj[key]]]
      }
      obj[obj[key]] = obj[obj[key]].concat(key)
    }
    delete obj[key]
  }
  return obj;
}
console.log(invert({ a: '1', b: '2'}))
console.log(invert({ a: '1', b: '2', c: '2'}))
console.log(invert({ a: '1', b: '2', c: '2', d: '2'}))

/*Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.

Solution*/

let books = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  { book: "After Dark", readStatus: true, percent: 70 }
]
function getBooks(books){
  return books.filter(item => item.readStatus === true).sort((a, b) => (a.percent - b.percent))
}
console.log(getBooks(books))

Հ.Գ. Ոնց դուրըս եկավ բայց էս լուծումս )