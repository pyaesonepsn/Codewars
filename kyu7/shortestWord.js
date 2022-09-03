/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s){
    //P: string
    //R: length of the shortest word int
    //E: findShort("We are") -> 2
    return Math.min(...s.split(' ').map((word) => word.length));
}