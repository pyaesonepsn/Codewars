/*
Instructions
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */

var capitals = function (word) {
    //pseudo
    // split the array ['The','Moon']
    // map through array. if the char is upperCase, return the index of char,
    // if not, return null
    // filter through newArr, skipping all null values
    return word.split('')
        .map((char,i) => {if(char.toUpperCase() === char) return i;})
        .filter(i => { return i != null});
};