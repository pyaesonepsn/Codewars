/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsogram(str){
    let string = str.toLowerCase();
    for(let i = 0; i < string.length; i++){
        for(let j = i+1; j < string.length; j++){
            if(string[i] === string[j]){
                return false;
            }
        }
    }
    return true;
}