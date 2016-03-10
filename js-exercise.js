/* 1. Declare variables that are examples of the
 five primitive types. For example, assign
 true to booleanValue, since true is a boolean
 value. Show two different ways to make a
 variable undefined! */

var booleanValue    = true ;
var numberValue     = 1;
var stringValue     = "string";
var nullValue       = null;
var undefinedValue  = undefined;
var undefinedValue2

/* 2. In your console, use the typeof operator on
 each of the above variables. For example: */

typeof booleanValue
typeof numberValue
typeof stringValue
typeof nullValue
typeof undefinedValue
typeof undefinedValue2

/* 3. Which of the above variables does typeof NOT
 show the expected primitive type? This is
 a bug in JavaScript! It has not been fixed
 since a lot of code online depends on it. */
​
typeof nullValue
​
/* Mia, Albert, and Tony are going to a party.
 Set "attendees" to an array of their names. */
​
var attendees = ["Mia","Albert","Tony"]
​
​
/* Create the same array in a different way --
 by creating a new Array object. */
​
attendees = {
    Mia : "attending",
    Albert : "attending",
    Tony : "attending",
}​
​
/* Access the third element in the array. */
​
attendees[2]
​
/* Write a statement which sorts the array. */
​
console.log (attendees)
​
/* Write a statement which removes the last
 element of the array. */
​
attendees.pop()
​
​
/* Write a statement which shifts a new element
 into the array as element 0 -- "Elaine" */
​
attendees.unshift("Elaine")
​
​
/* console.log the following poem. Do it using
 a single console.log statement! Make sure there
 are four separate lines in the console output.
​
 Computers are fun,
 Because they are neat.
 Javascript and Ruby,
 They cannot be beat! */
​
​
console.log("Computers are fun, \nBecause they are neat. \nJavascript and Ruby,\nThey cannot be beat!")


/************************
 *  WHILE LOOPS
 ************************/
​
/* Fix the below while loop so that the user
 is continually asked whether he or she is done.
 Continue looping while the user enters "no".
 Remember you can place console.log statements
 inside loops to "see" the values change. */
​
var isDone = "no";
while (isDone === null) {
    isDone = prompt("Are you done?");
}
​
​
/* Modify the solution to the above while loop
 below. Now, continue looping if "no" OR "No"
 is entered. */
​
var isDone = "no";
while (isDone === null) {
    isDone = prompt("Are you done?");
}
​
​
​
/* Explain to each other in English what this statement
 does. It should be a simple statement.
 Look up functions such as Math.round() and
 Math.random() if they are new. Try pasting the
 individual parts of this statement into
 your console to better understand it! */
​
var theTarget = Math.round(100 * Math.random()) + 1;
​
​
/* Number guessing game. While the guess is not
 the target value, continue asking the user
 for a guess and informing whether the guess
 is too low or too high. */
​
var guess = 0;
var theTarget = Math.round(100 * Math.random()) + 1;
while (null) {
    guess = prompt("Make a guess!");
​
    if (null) {
        alert("Too high!");
    } else if (null) {
        alert("Too low!");
    }
}
​
​
/* The following while loop implements a
 "count up" clock. Make it console.log the
 numbers 1, 2, 3, 4, and 5. */
​
var i = null;
while (i < null) {
    console.log(null);
    null;
}
​
​



