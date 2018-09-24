
/* For each example of code please identy
   the higher order function and the callback function(s) */

/* For both types of functions, you will describe the
   parameters and return values (if any) */

// Question 1:

function returned() {
  console.log("The king hath returned from the hunt!");
};

function death() {
  console.log("The king is dead!");
}

function birth() {
  console.log("An heir has been born today!");
}

function announce(cb) {
  console.log("Hear ye! Hear ye!");
  cb();
}

announce(returned);
announce(birth);
announce(death);

/**
  1a) What is the higher order function is this example? announce(); is the higher order function.
  List the parameters and return values.
  parameters = cb;  the string quotes for the specific callback function called. either returned(),death(), or birth();
  1b) What are the callbacks in this example? retuned('The king hath returned from the hunt!'), death('The king is dead!'), birth('An heir has been born today!');
  List the parameters and return values for each.
  retuned('The king hath returned from the hunt!'), death('The king is dead!'), birth('An heir has been born today!');
*/

// Question 2:

function addFn(x, y) {
  return x + y;
}

function subtractFn(x, y) {
  return x - y;
}

function combine(x, y, cb) {
  return cb(x, y);
}

const result1 = combine(1, 4, addFn);
const result2 = combine(9, -2, subtractFn);
const result3 = combine(2, 3, function(x, y) {
  return x * y;
})

/**
  2a) What is the higher order function? combine( x, y, cb){}
  List the parameters and return values. parameters are ( x, y, cb); return values are X * Y;
  2b) What are the callbacks? addFn(x, y); and subtractFn(x, y);
  List the parameters and return values for each.  addFn(x, y), and return X +Y ; subtractFn(x, y) and return x - y;
*/


// Question 3:

function addExcitement(string) {
  return 'string' + '!';
}

const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
const excitedPhrases = phrases.map(addExcitement);

/**
  3a) What is the higher order function? citedPhrases = phrases.map(cb);
  List the parameters and return values.phrase.map(addExcitement); this means the higher order funtion will iterate through the array, and concatinate every string in the array to the addExcitement string return statment.
  3b) What are the callbacks? addExcitement, but her is also the map method which is a function that iterates through the phrases array.
  List the parameters and return values for each. parameters are addExcitement; the return values are each instance of the phrases array concatinated with '!'
*/


// Stretch Question 4:

function findLongest(str1, str2) {
  const firstLonger = str1.length >= str2.length;

  if (firstLonger) {
    return str1;
  } else {
    return str2;
  }
}

const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];

const longestWord = words.reduce(findLongest);
const longestPhrase = phrases.reduce(findLongest);

/**
  4a) What is the higher order function? longestWord and reduce, and longestPhrase and reduce;
  List the parameters and return values. longestWord parameters are findLongest. return values are ; longestPhrase parameters are findLongest;
  4b) What are the callbacks? findLongest for both, and reduce for both to work with the arrays.
  List the parameters and return values for each.  words are the parameters for the reduce method, and findLongest.
  return values are str1, or str2.
  phrasesare the parameters for reduce,it returns the array.
  findLongest is the parameters and str1, or str2 is the return value.
*/
