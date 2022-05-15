// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
 //console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: I was correct. The .push() mutator method outputs the length of the new array it creates.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: I was correct. the .length method returned the count of the number of characters in the string after the assignment operator for cohort


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: error
// b) Verify and explain: I was wrong. I thought the const needed to be an array in order to find the desired index


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 //console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Correct. arrays are zero indexed; the first index is the second value in the array


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: Wrong. toUpperCase makes all letters in a string uppercase. weekendDays is not a string--it is an array


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: I was correct. the dataTypes.length is a number that represents the length of dataTypes. typeof determines the type of data which, in this case is a number--the number of indexes in the array called dataTypes
