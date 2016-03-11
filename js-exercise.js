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
attendees.sort()
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
while (isDone === "no") {
    isDone = prompt("Are you done?");
}
​
​
/* Modify the solution to the above while loop
 below. Now, continue looping if "no" OR "No"
 is entered. */
​
var isDone = "no";
while ((isDone === "no") || (isDone === "No")){
    isDone = prompt("Are you done?");
}
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
while (guess !== theTarget) {
    guess = prompt("Make a guess!");
​
    if (guess > theTarget) {
        alert("Too high!");
    } else if (guess < theTarget) {
        alert("Too low!");
    }
}
​
​
/* The following while loop implements a
 "count up" clock. Make it console.log the
 numbers 1, 2, 3, 4, and 5. */
​
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

​/************************
 *  FOR LOOPS
 ************************/
​
/* Rewrite the "count up" clock as a for loop! */
​
for (var i = 0; i<6; i++) {
    console.log(i);
}
​
/* Rewrite the for loop to have no initial conditions. */
​
var i = 1;
for (; i < 6; i++) {
    console.log(i);
}
​
/* Rewrite the for loop to have no incrementing statement. */
​
for (i=1; i<6; ) {
    console.log(i);
    i++;
}
​
/* Rewrite the for loop to have no incrementing or intial
 statements. */
​
var i=1;
for (; i<6; ) {
    console.log(i);
    i++;
}
​
/* Note that this is identical to the while loop! */
​
​
/* Let's make a count DOWN clock. We will display
 5, 4, 3, 2, 1, 0. */
​
var i = 5;
while (i >= 0) {
    console.log(i);
    i--;
}
​
/* Now, rewrite the countdown clock as a for loop! */
​
for (var i = 5; i>=0; i--) {
    console.log(i);
}
​
​
/* Using a for loop, print each value of the array
 to the console. */
​
var foods = ["Burger", "Fries", "Drink", "Tomato"];
​
for (i=0; i<foods.length; i++) {
    console.log(foods[i]);
}
​
/* Using a for loop, print each value of the array
 to the console, backwards! */
​
var foods = ["Burger", "Fries", "Drink", "Tomato"];
​
for (i=foods.length-1; i>=0; i--) {
    console.log(foods[i]);
}
​
​
​
/************************
 *  FUNCTIONS
 ************************/
​
/* Given the following function, call the function with
 appropriate example values. In a comment, write
 what the expected output will be. */
​
function concatStrings(str, appendString) {
    return str + appendString;
}
​
concatStrings("hello","world");  // output is: helloworld
​
​
/* Write a function that takes one number as a parameter,
 and returns that number plus one. Choose good
 variable names! Call the function with an appropriate
 parameter. */
​
function plusOne(a) {
    return a+1;
}
​
plusOne(4);  // output is: 5
​
​
/* Complete the below function. It accepts a
 number and returns a string with "a" repeated
 that many times. For example, calling the
 function with 3 will return "aaa".
 Use a for loop to construct the return
 string. Call the function
 with example values and write the output as
 a comment. */
​
function repeatA(numTimesRepeated) {
    var returnString = "";
    for (i=0; i<numTimesRepeated; i++) {
        returnString += "a"
    }
    return returnString;
}
​
repeatA(3);   // output is: aaa
​
​
/* Let's generalize the last function. Now, a
 second parameter will be passed which is the
 character (or string) to repeat! Call the function
 with example values and write the output as
 a comment. */
​
function repeatString(numTimesRepeated, stringToRepeat) {
    for (i=0;i<numTimesRepeated; i++) {
    return ("" += stringToRepeat)// modify the last function's code
}
}
​
repeatString(4, "b");  // output is: bbbb
​
​
/* Write a function which returns the original array,
 but reversed! */
​
function reverseStrings(arrayOfStrings)
{
    var reversedArray = [];
​
    for (i=arrayOfStrings.length-1; i<arrayOfStrings.length; i++) {
        reversedArray.push(i);
    }
​
    return reversedArray;
}
​
var foods = ["Burger", "Fries", "Drink", "Tomato"];
reverseStrings(foods);
​
/* Note that variables can be assigned functions. */
​
var someVariable = repeatA;
var anotherVariable = repeatA;
​
/* Try running the above two lines in your browser.
 Now, try calling the functions by using the
 new variables. (i.e. run the below code!) */
​
someVariable(3);
anotherVariable(5);
​
/* This is an important fact about JavaScript --
 functions can be assigned to variables and
 passed around as arguments to functions! */
​
​
/* CONGRATULATIONS! YOU MADE IT TO THE END! */



