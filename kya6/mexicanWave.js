/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 */

function wave(str){
    // change input string into lower case letter;
    let string = str.toLowerCase();
    let waveArray = [];
    // Loop the array and push it in waveArray
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        if(letter === ' '){ // check the letter is whitespace or not.
            continue;
        }else {
            waveArray.push(string.slice(0,i) + letter.toUpperCase() + string.slice(i+1));
        }
    }
    return waveArray;
}