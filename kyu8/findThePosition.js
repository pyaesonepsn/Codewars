/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"
 */

function position(letter){
    //P: string
    //R: string
    //E: position('a') => Position of alphabet: 1
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97)+1)
}