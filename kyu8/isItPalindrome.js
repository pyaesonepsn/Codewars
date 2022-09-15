/*
Write a function that checks if a given string (case insensitive) is a palindrome.
 */

function isPalindrome(x) {
    const lowerCaseInput = x.toLowerCase();
    const forward = lowerCaseInput;
    const backward = lowerCaseInput.split('').reverse().join('');
    return forward == backward;
}