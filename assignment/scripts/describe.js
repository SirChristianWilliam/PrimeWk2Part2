// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First, create a "let" variable (name) with the literal string value of "Dane";
// Create an "if" statement comparing the variable "name" with the string literal "Mary";
// The comparison is looking for equal value as well as type, since it is three equal signs
//...rather than two. 
// If true, console.log will return "Hi, Mary!", otherwise it will return "How do you do?";
// If using "==" rather than "===", the result will be the same as the comparison is between
//...two literal strings which require quotations on either side to label it as such.
// It would be different if the value was an appropriate variable, or a number. 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create variable "let" with the name "secret". It's value is currently undefined. 
// Create variable "let" with the name code, with a Number value of 123. 
// Create "if" statement to compare the code, which has a Number value of 123, and find out
//...if it is equal (in value and type) to the number 123. If it is equal, apply a value to 
// the undefined variable "secret" with a string literal called "super". Additionally,
//take the current value of variable "code" and multiply it by 2 (totals 246).
//If the value of the variable code is greater than 250 (it isn't), then change the value of secret
// to "duper". 
// Then, console.log the variable "secret". It will be either "super" or "duper", depending on the result. 
// In this case, It will just be "super" because the value of variable code is NOT greater than 250. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create three variables using "let". isStudent has a boolean value of true.
//  age has a Number value of 34. And variable zip has a Numerical value of 55407.
// Create a comparative "if" statement. These comparisons use "===" rather than "==", so it's
//...comparing value AND type. 
// The first comparison is asking if isStudent, as a boolean, is true. In order for this full comparison
//..to be true, the variable zip (55407) additionally needs to be greater than 80000, which is not true in
//..this case. Thus, we move on to the next "else if" statement until we find one that is true. 
// The next one says if isStudent (as a boolean) is false OR age (34) is less than 30, then
//..to return "What are your hobbies?" using console.log. This will also not return this statement as
//..both of the comparisons are not true. The next comparison in the "if" statement is soley asking if
//.. isStudent is true. It is true. Thus, console.log("Welcome to Prime!") will be diplayed. If none of
//..These conditions were true, the console would display "How about the weather?". 
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX: colorOne is set to 'red', but it should be set to 'blue'; colorTwo should be set to 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX: The instrucitons say that colorOne AND colorTwo are set to purple, only colorOne is. 
//FIX: Set colorTwo to equal 'purple' as well. 
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//FIX: The instructions are comparing whether temp is greather than 39 AND (&&) if time is >= 4.
//FIX: The operator used is an "OR" operator, not an "AND" one, so switch "||" out for "&&"". 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//FIX: The comparison operator is incorrect, currently it reads as "less than or equal to".
//FIX: It should be "greater than or equal to," or " >= ". Additionally, the direction reads as comparing
//FIX:...variable "age" TO variable "minAge", so we should switch their placement to look like 
//FIX:.. " (age >= minAge) ". The result is the same only because their current values are equal. 
//FIX: Also, the console.logs are in the opposite spots. Right now, console.log will return "no entry",
//FIX:..So, the first console.log entry should have the string value of "enter", and the second entry
//FIX:..(Which returns if the comparison is false), should have the console.log value of "no entry". 

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

