/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
    //P: string
    //R: integer, count
    //E: getCount(yellow) : 2
    // loop the string and conditional check the str[i] is same with vowels or not
    // if it is same, count ++,
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}