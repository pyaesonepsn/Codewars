/*
Your task is to make a function that can take any non-negative integer as an argument
and return it with its digits in descending order. Essentially,
rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

function descendingOrder(n){
    //P integer
    //R integer
    //E descendingOrder(42145) -> 54421
    // change int to string to array using split method ['4','2','1','4','5']
    // sort the array ['1','2','4','4','5']
    // reverse the array ['5','4','4','2','1']
    // join the array 54421
    let str = n.toString();
    let array = str.split('');
    let sortedArray = array.sort();
    let reverseArray = sortedArray.reverse();
    let backNumber = Number(reverseArray.join(''));
    return backNumber;
}