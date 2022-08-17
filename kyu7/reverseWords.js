/*
Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
    let array = str.split('') // ['d','o','u','b','l','e',' ','s','p','a','c','e','s']
    let reverse = array.reverse(); //[s,e,c,a,p,s, ,e,l,b,u,o,d]
    let join = reverse.join(''); // [secaps elbuod]
    let rev = join.split(' '); //['secaps','elbuod']
    let result = rev.reverse().join(' '); // "elbuod secaps"
    return result;
}
