/*
Implement the function unique_in_order which takes as argument a sequence
and returns a list of items without any elements with the same value next to each other
and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

const uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //check the iterable is array or not and assign it in strArr var
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    //loop the array and check the same value
    // filter the same element
    return strArr.filter((letter, i) => {
        return strArr[i] !== strArr[i + 1];
    });
}