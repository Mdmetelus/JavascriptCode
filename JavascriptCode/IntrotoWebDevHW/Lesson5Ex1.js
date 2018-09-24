// addOne takes in a number as a parameter
// and returns that numbers +1
// Example: addOne(-7) returns -6

function addOne(x) {
   return x + 1;
}
console.log(addOne(6));

// divide takes in two numbers as parameters
// and returns the first divided by the second
// Example: divide(6, 3) returns 2

function divide(x, y) {
  let a = x / y;
  return a;

}


// getBiggest takes in two numbers
// and returns the largest of the two
// if they are the same, return either
// Example getBiggest(-1, 3) returns 3

function getBiggest(x, y) {
  if ( x > y) {
    return x;
  } else if ( x < y ) {
    return y;
  } else if ( x === y ) {
    return x;
  } else {
    return NaN;
  }
}

// getLength takes in a string
// and returns the length of the string
// Example: getLength('tazerface') returns 9

function getLength(str) {
  return str.length;

}

// orderPizza takes in a boolean
// if it is true return the string 'cheese pizza'
// if not, return the string 'pepperoni pizza'
// Example: orderPizza(true) returns 'cheese pizza'

function orderPizza(vegetarian) {
  let i = vegetarian;
  if ( vegetarian === true ) {
   return 'cheese pizza';
  } else {
    return'pepperoni pizza';
  }
}

// countDown takes in a number greater than 0
// it logs every number starting from the input down to 0
// there is no return value
// Example: countDown(3) logs the following
// 3
// 2
// 1
// 0

function countDown(start) {
  //const l = start;
  for (let i = start; i > -1 ; i--) {
    if ( i < 0 ) {
      break;
    }
  console.log(i);

  }

}

// repeat logs a phrase x number of times
// there is no return value
// Example: repeat("not your mama's edamame", 4) logs the following
// "not your mama's edamame"
// "not your mama's edamame"
// "not your mama's edamame"
// "not your mama's edamame"

function repeat(phrase, x) {
  for (let i = 0; i < x ; i++) {
    console.log(phrase);
  }

}

// getHTMLTag takes in a tag name
// and returns the opening and closing tag
// Example: getHTMLTag('div') would return '<div></div>'

function getHTMLTag(tagName) {
  const a = '<'+tagName+'></'+tagName+'>';
  return a;

}
console.log(getHTMLTag("span"));

// STRETCH PROBLEMS (NOT REQUIRED)

// getHeaderTag takes in header text and a header size
// and returns the opening and closing H tag with the text inside
// Example: getHeaderTag('Welcome', 2) would return '<h2>Welcome</h2>'

function getHeaderTag(text, size) {
 //  return '\'<'${size}'>'${text}'</'${size}'>\'';

}

// logMultiples takes in two numbers
// and logs any number between 1 and 100 that is a multiple of x or y
// there is no return value
// Example: logMultiples(20, 25) would log
// 20
// 25
// 40
// 50
// 60
// 75
// 80
// 100

function logMultiples(x, y) {

}

// reverseWords takes in a string and reverses every word in the phrase
// it returns the reversed version of the string
// Example: reverseWords('good luck') would return 'kcul doog'

function reverseWords(phrase) {
  return str.split( '' ).reverse( ).join( '' );
}
