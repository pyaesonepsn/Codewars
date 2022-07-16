/*
Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
 */

function solution(str, ending){
    //P: string input
    //R: boolean, true
    //E: solution('abc','bc') => true
    // : solution('abc','d') => false
    // check the str ends with ending using endsWith function
    return str.endsWith(ending);
}