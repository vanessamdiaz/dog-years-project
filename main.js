// create a variable named myAge
const myAge = 32;

// create a variable named earlyYears and save the value 2
var earlyYears = 2;
earlyYears = earlyYears * 10.5;

// since we already accounted for the first 2 years create laterYears variable subtract 2
var laterYears = myAge - 2;

//Calculate number of dog years accounted for
laterYears *= 4;

// Testing
//console.log(earlyYears);
//console.log(laterYears);

// create new variable adding earlyYears and laterYears
var myAgeInDogYears = earlyYears + laterYears;

// return a sting with all lowercase letters
myName = 'Vanessa';
myName.toLowerCase;

// use string interpolation to display sentence
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
