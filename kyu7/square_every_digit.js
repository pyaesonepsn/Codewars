/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 */

function squareDigits(num){
    let string = num.toString(); // turn number into string
    let results = []; // create variable to assign result
    for(let i = 0; i < string.length; i++){ // loop the string to check the number
        results[i] = string[i] * string[i]; // save the square of the number into array
    }
    return Number(results.join('')); // turn the arry into string and then number
}