/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

var summation = function (num) {
    //P: integer greater than zero
    //R: the sum of integer 1 to num
    //E: summation(3) => 1+2+3 = 6
    // while loop until num and sum++
    // return sum
    let i = 1;
    let sum = 0;
    while(i <=num){
        sum += i;
        i++;
    }
    return sum;
}