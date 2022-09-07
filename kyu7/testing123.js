/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */

var number=function(array){
    //P: array
    //R: array
    let result = [];
    for(let i = 0, j = 1; i < array.length; i++){
        if(array.length === 0){
            return `Empty array should return empty array`
        }else {
            result.push(`${j}: ${array[i]}`)
            j += 1;
        }
    }
    return result;
}