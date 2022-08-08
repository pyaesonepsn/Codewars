/*
Write a function named sumDigits which takes a number as input and
returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
 */

function sumDigits(number) {
    //integer
    //R integer
    //E sumDigits(85) -> 13
    // change integer to string then array
    // reduce method to loop and sum the element
    // return the sum
    return Math.abs(number).toString().split('').reduce((a,b) => a + +b, 0);
}
