/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
    // filter negative number
    // sum the positive numbers
    const positiveNum = arr.filter(num => num > 0);
    return positiveNum.reduce((acc,c) => acc+c,0)
}