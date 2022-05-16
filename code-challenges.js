// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

    //Function Signature
        //input: any number as an argument for the parameter
        //output: string repeating the number and indicating whether number is below, at, or above boiling point
    //Examples
        //input: 42 ---> output: "42 is below boiling point."
        //input: 350 ---> output: "350 is above boiling point."
        //input: 212 ---> output: "42 is below boiling point."
        //input: "" ---> output: "42 is below boiling point."

    //Process
    //function called boilPoint that takes in a number in parameter called temp
    const boilPoint = (temp) => {
        //if temp is strictly equal to 212 return `${number/argument entered} is at boiling point`
        if(temp === 212){
            return `${temp} is at boiling point`
        } 
        //if temp is greater than 212 return `${number/argument entered} is above boiling point`
        else if(temp > 212){
            return `${temp} is above boiling point`
        } 
        //if temp is less than 212 return `${number/argument entered} is below boiling point`
        else if(temp < 212){
            return `${temp} is below boiling point`
        } 
        // an input other than a number returns an error
        else {
            return "ERROR. Please enter a number"
        }
    } 
    console.log(boilPoint(temp1)) // output: 42 is below boiling point
    console.log(boilPoint(temp2)) // output: 350 is above boiling point
    console.log(boilPoint(temp3)) // output: 212 is at boiling point
    //console.log(boilPoint(295)) // output: 295 is above boiling point
    //console.log(boilPoint(76)) // output: 76 is below boiling point
    //console.log(boilPoint("chocolate"))// output: ERROR. Please enter a number







 

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

    //Code Signature
        //output: when console.log'ed, the output should show the total number of arrays in the concatenation of the two test arrays
       
    //Create a variable called comboNum that concatenates the two arrays using the built-in method of .concat(). 
    var comboNum = myNumbers1.concat(myNumbers2)
    //console.log the length of the new variable that is the concatenation of myNumbers1 and myNumbers2n with the built-in method of .length
    console.log(comboNum.length) //output is the length of the array called comboNum 
    


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

    //Function Signature
        //input: any string as an argument for the parameter
        //output: the "Anti" (reverse) version of the string
    //Process
    //create a function called antiString that takes an argument string in the parameter
    const antiString = (string) => {
        //split the string so each individual character (including the space) has its own index in an array. 
        var splitString = string.split(""); 
        //console.log(splitString) to witness result of this process
        // reverse the order of each character in the array. 
        var reverseArray = splitString.reverse(); 
        //console.log(reverseArray) to witness result of this process
        //combines the characters in the new reverse order into one string with no spacing in between characters
        var joinArray = reverseArray.join("")
        return joinArray
    }

    console.log(antiString(currentCohort)) //output: 2202 eilrahC
    //console.log(antiString("I like chocolate")) //proves the function will take a written-out string






// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]
    //Iteration Signature
        //input
        //Use for loop iteration. Starts at Zeroth index of the array; ends at the last index of the array; index is counted up by one increment until the loop ends
        for(let i = 0; i < myArray.length; i++){
            //Code block for the iteration includes conditional statement
            //if the value of the current index has a remainder value strictly equal to 1, console.log "odd"
            if(myArray[i]%2 === 1){ 
                console.log("odd")
            } 
            //if the value of the current index has a remainder value strictly equal to 0, console.log "even"
            else if(myArray[i]%2 === 0){
                console.log("even")
            }
            //if the value of the modulo (remainder) of the current index is not stictly equal to 1 or 0, console.log "ERROR"
            else {
                console.log("ERROR")
            }
    }
 

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
    //Function Signature
        //input: a set of two numbers
        //output: difference of the two numbers represented as a positive integer--not a negative one
    //Create function called subractNums the parameter of which takes an argument of a set of two numbers
    const subtractNums = (num1, num2) =>{
        //a conditional statement that includes relational operators comparing num1 and num2
        //use a relational operator that determines the truth of the statement num1 is greater than num2
        if(num1 > num2){
            //if the Boolean value is true then return num1 minus num2
            return num1-num2
        } 
        //if previous condition is not met (if it is not true that num1 is greater than num2), then determine if num1 is less than num2
        else if(num1 < num2){
            //if the Boolean value is true then return num2 minus num1
            return num2-num1
        }
    }
    console.log(subtractNums(number1, number2))
    // console.log(subtractNums(number2, number1)) // output proves that the order of the values entered as the argument does not affect the function
     console.log(subtractNums(number3, number4))
    // console.log(subtractNums(number4, number3))output proves that the order of the values entered as the argument does not affect the function
